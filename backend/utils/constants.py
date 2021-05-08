from collections import namedtuple

# RKI API
HOST = 'localhost'
PORT = 8080
PORT_STR = '8080'
URL = 'http://' + HOST + ':' + PORT_STR

# endpoints
endpoint_names = ['germany', 'vaccinations', 'states', 'districts']
endpoints = namedtuple('ENDPOINT', endpoint_names)
ENDPOINTS = endpoints(
    germany='/germany',
    vaccinations='/vaccinations',
    states='/states',
    districts='/districts'
)

