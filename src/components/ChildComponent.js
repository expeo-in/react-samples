import GrandChildComponent from "./GrandChildComponent";
export default function ChildComponent() {
  return (
    <>
      <h2>Child Component</h2>
      <GrandChildComponent></GrandChildComponent>
    </>
  );
}
