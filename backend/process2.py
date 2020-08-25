
from datetime import time
import cv2
from fastpose.src.system.interface import AnnotatorInterface
from fastpose.src.utils.drawer import Drawer
import time

from fastpose.src.utils.pose import Pose2D, PoseConfig

import json



"""
Read the movie located at moviePath, perform the 2d pose annotation and display
Run from terminal : python demo_2d.py [movie_file_path] [max_persons_detected]
with all parameters optional.
Keep holding the backspace key to speed the video 30x
"""


def start(movie_path, max_persons):

    annotator = AnnotatorInterface.build(max_persons=max_persons)

    cap = cv2.VideoCapture(movie_path)
    frame_width = int(cap.get(3))
    frame_height = int(cap.get(4))


    out = cv2.VideoWriter('./data/output/output2.avi',cv2.VideoWriter_fourcc('M','J','P','G'), 30, (frame_width,frame_height))

    complete_pose_json = {}
    frame_num = 0

    while(True):

        ret, frame = cap.read()

        if not ret:
            break

        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        tmpTime = time.time()
        persons = annotator.update(frame)
        fps = int(1/(time.time()-tmpTime))

        poses = [p['pose_2d'] for p in persons]

        ids = [p['id'] for p in persons]
        frame = Drawer.draw_scene(frame, poses, ids, fps, cap.get(cv2.CAP_PROP_POS_FRAMES))



        # construct a json from the pose
        if len(poses) > 0:
            print('pose ting', frame_num)
            # HEAD, L_SHOULDER, R_SHOULDER, L_ELBOW, R_ELBOW, L_WRIST, R_WRIST = 0, 1, 2, 3, 4, 5, 6
            #     L_HIP, R_HIP, L_KNEE, R_KNEE, L_ANKLE, R_ANKLE = 7, 8, 9, 10, 11, 12


            pose_json = {
                'HEAD' : poses[0].joints[PoseConfig.HEAD].tolist(),
                'L_SHOULDER': poses[0].joints[PoseConfig.L_SHOULDER].tolist()
            }

            complete_pose_json[frame_num] = pose_json
        frame_num += 1


        # frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
        # cv2.imshow('frame', frame)
        out.write(frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

        if cv2.waitKey(33) == ord(' '):
            curr_frame = cap.get(cv2.CAP_PROP_POS_FRAMES)
            cap.set(cv2.CAP_PROP_POS_FRAMES, int(curr_frame + 30))

    annotator.terminate()
    cap.release()
    out.release()
    cv2.destroyAllWindows()

    return complete_pose_json







if __name__ == "__main__":

    print("start frontend")

    default_media = './testvid.mp4'
    max_persons = 1

    print(start(default_media, max_persons))



