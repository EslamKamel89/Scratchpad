import { Component, type JSX } from "react";
type LifeCycleLoggerProps = {
  message: string;
};
class LifeCycleLogger extends Component {
  message: string;
  constructor(props: LifeCycleLoggerProps) {
    super(props);
    this.message = props.message;
    console.log("LifeCycleLogger init............");
    this.state = {
      count: 0,
    };
  }
  componentDidMount(): void {
    console.log("LifeCycleLogger mounted ...............");
  }
  componentDidUpdate(prevProps, prevState): void {
    if (prevState.count != this.state.count) {
      console.log("component updated");
      console.log("prevProps", prevProps);
      console.log("prevState", prevState);
    }
  }
  componentWillUnmount(): void {
    console.log("Component will Unmount");
  }
  incrementCount = () => {
    this.setState((prev) => ({
      ...prev,
      count: prev?.count + 1,
    }));
  };
  render(): JSX.Element {
    return (
      <div className="my-4 flex h-44 w-full items-center justify-center rounded-2xl bg-purple-950 text-white">
        <div>
          <div>{this.message}</div>
          <button className="btn" onClick={() => this.incrementCount()}>
            + ({this.state.count})
          </button>
        </div>
      </div>
    );
  }
}
export default LifeCycleLogger;
