export default function ItemService({ image, title, description }) {
  return (
    <li className="cs-item">
      <div className="cs-flex">
        <h2 className="cs-h2">{title}</h2>
        <p className="cs-item-text">{description}</p>
      </div>
      <img src={image} className="cs-icon" width="48" height="48" />
    </li>
  );
}
