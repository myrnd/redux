import { fetchData } from "./action-creator";
import { connect } from "react-redux";

function App({ state, dispatch }) {
  console.log(state);
  return (
    <div>
      <h1>Redux-thunk</h1>
      <button onClick={() => dispatch(fetchData())}>Get Data</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state: state.defaultReducer };
};

export default connect(mapStateToProps)(App);