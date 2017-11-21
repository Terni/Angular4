"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@angular/http");
const testing_1 = require("@angular/http/testing");
function fakeBackendFactory(backend, options) {
    backend.connections.subscribe((connection) => {
        let testUser = { username: 'admin', password: 'admin' };
        setTimeout(() => {
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === http_1.RequestMethod.Post) {
                let params = JSON.parse(connection.request.getBody());
                if (params.username === testUser.username && params.password === testUser.password) {
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: { token: 'fake-jwt-token' } })));
                }
                else {
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                }
            }
            if (connection.request.url.endsWith('/api/users') && connection.request.method === http_1.RequestMethod.Get) {
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: [testUser] })));
                }
                else {
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                }
            }
        }, 500);
    });
    return new http_1.Http(backend, options);
}
exports.fakeBackendFactory = fakeBackendFactory;
exports.fakeBackendProvider = {
    provide: http_1.Http,
    useFactory: fakeBackendFactory,
    deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
};
//# sourceMappingURL=fake-backend.js.map