# uvicorn server:app to start this server

from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route

from starlette.middleware import Middleware
from starlette.middleware.httpsredirect import HTTPSRedirectMiddleware
from starlette.middleware.trustedhost import TrustedHostMiddleware
from starlette.middleware.cors import CORSMiddleware

import json

from process2 import start


async def homepage(request):
    return JSONResponse({'hel': 'world'})

async def testAngular(request):

    form = await request.form()

    filename = form["upload_file"].filename
    contents = await form["upload_file"].read()
    form["upload_file"].close()

    print('Form:', form)
    print('Filename:', filename)

    # write the file
    f = open('./testvid.mp4', 'wb')
    f.write(contents)
    f.close()

    # WRITING THE FILE FUCKING WORKS FUCK YES 

    # Next step:
    # process the file, send bacc the poses

    print("start frontend")

    default_media = './testvid.mp4'
    max_persons = 1

    json_ting = start(default_media, max_persons)

    print(json_ting)

    return JSONResponse(json_ting)

async def upload(request):
    form = await request.form()



# Get around the CORS policy thing
# @TODO: remove in production
middleware = [
  Middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'],
  allow_credentials=True),
#   Middleware(TrustedHostMiddleware, allowed_hosts=['*'])
]

routes = [
    Route('/', homepage),
    Route('/postTest', testAngular, methods=['GET', 'POST'])
]

app = Starlette(
    debug=True, 
    routes=routes,
    middleware=middleware
    )

