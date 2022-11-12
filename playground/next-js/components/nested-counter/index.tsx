import Counter from "../counter";

const NestedCounter = () => {
  return (
    <div>
      <div>
        <span>This is a nested counter.</span>
      </div>
      <Counter initialValue={2} />
    </div>
  );
}

export default NestedCounter;
