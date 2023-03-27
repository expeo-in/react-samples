export default function ListGroup({ items, heading, onItemClick }) {
  // let items;
  // if (props && props.items) items = props.items;
  // let heading;
  // if (props && props.heading) heading = props.heading;

  //   const countries = [];

  // const handleClick = (item, event) => {
  //   alert(item.name);
  //   alert(event.target);
  // };

  // function handleClick(item, event) {
  //   alert(item.name);
  // }

  let content;

  if (!items) return <p>Data not passed</p>;

  if (items && items.length === 0) content = <p>No data</p>;
  else
    content = (
      <>
        <h2>{heading}</h2>
        <ul className="list-group col-3">
          {items.map((item) => (
            <li
              className="list-group-item"
              key={item.id}
              onClick={(event) => {
                console.log(event);
                onItemClick(item);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </>
    );

  return content;
}
