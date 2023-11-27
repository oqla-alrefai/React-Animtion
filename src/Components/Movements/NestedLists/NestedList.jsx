import "./nestedLists.css";
// the css feature I'm trying ro use in this component (anchor) is still not lunched 
// will continue the styling once it's lunched.
const NestedLists = () => {
  return (
    <section className="nested_lists_container">
      <div className="nested_lists_content">
        <h2>Only HTML and CSS 🥶</h2>
        <ul>
          <li popovertarget="viewIcons">
            <a>View</a>
          </li>
          <li>
            <a>Sort By</a>
          </li>
          <li>
            <a>Refresh</a>
          </li>
          <li>
            <a>New</a>
          </li>
          <li>
            <a>Display settings</a>
          </li>
          <li>
            <a>Personalize</a>
          </li>
          <li>
            <a>Open in Terminal</a>
          </li>
        </ul>
        <ul id="viewIcons" popover>
          <li>
            <a>Large Icons</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NestedLists;
