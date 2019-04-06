import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../sagas";

import {
  REGISTER_CALL_REQUEST,
  REGISTER_CALL_SUCCESS
} from "../../actionTypes/registerActionTypes";

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

const post = jest.fn(() =>
  Promise.resolve({
    data: {}
  })
);
describe("Register User Saga Test", () => {
  post.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        message: "Account created",
        user: {}
      }
    })
  );

  it("should run the worker saga", () => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: REGISTER_CALL_REQUEST },
      { type: REGISTER_CALL_SUCCESS, payload: "success" }
    ];

    store.dispatch({ type: REGISTER_CALL_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
