"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var express_1 = __importDefault(require("express"));
var issues_1 = __importDefault(require("../api/routes/issues"));
var db = __importStar(require("./test-setup"));
var issue_1 = __importDefault(require("../api/models/issue"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/issues', issues_1.default);
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db.connect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db.closeDatabase()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
afterEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db.clearDatabase()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe('GET /api/issues', function () {
    it('should return 200 OK and an array of issues', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app).get('/api/issues')];
                case 1:
                    res = _a.sent();
                    expect(res.statusCode).toEqual(200);
                    expect(Array.isArray(res.body)).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return issues within a given radius', function () { return __awaiter(void 0, void 0, void 0, function () {
        var lat, lng, radius, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Create an issue within the search radius
                return [4 /*yield*/, issue_1.default.create({
                        title: 'Test Issue',
                        description: 'A test issue',
                        location: { type: 'Point', coordinates: [-73.99, 40.73] }, // New York
                    })];
                case 1:
                    // Create an issue within the search radius
                    _a.sent();
                    // Create an issue outside the search radius
                    return [4 /*yield*/, issue_1.default.create({
                            title: 'Distant Issue',
                            description: 'An issue far away',
                            location: { type: 'Point', coordinates: [-118.24, 34.05] }, // Los Angeles
                        })];
                case 2:
                    // Create an issue outside the search radius
                    _a.sent();
                    lat = 40.7128;
                    lng = -74.006;
                    radius = 10;
                    return [4 /*yield*/, (0, supertest_1.default)(app).get("/api/issues?lat=".concat(lat, "&lng=").concat(lng, "&radius=").concat(radius))];
                case 3:
                    res = _a.sent();
                    expect(res.statusCode).toEqual(200);
                    expect(res.body.length).toBe(1);
                    expect(res.body[0].title).toBe('Test Issue');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('POST /api/issues', function () {
    it('should create a new issue', function () { return __awaiter(void 0, void 0, void 0, function () {
        var newIssue, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newIssue = {
                        title: 'My New Issue',
                        description: 'This is a brand new issue.',
                    };
                    return [4 /*yield*/, (0, supertest_1.default)(app)
                            .post('/api/issues')
                            .send(newIssue)];
                case 1:
                    res = _a.sent();
                    expect(res.statusCode).toEqual(201);
                    expect(res.body.title).toBe(newIssue.title);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=issues.test.js.map