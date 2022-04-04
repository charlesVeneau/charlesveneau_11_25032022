import './styles/Collapse.scss';

function Collapse({ children, title }) {
  return (
    <article className="collapse">
      <div className="collapse-title isClosed">{title}</div>
      <div className="collapse-content isHidden">{children}</div>
    </article>
  );
}

export default Collapse;
