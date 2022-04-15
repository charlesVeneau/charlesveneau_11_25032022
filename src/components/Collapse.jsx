import './styles/Collapse.scss';

function Collapse({ children, title, medium }) {
  return (
    <article className={'collapse ' + (medium ? 'collapse-medium' : '')}>
      <div className="collapse-title isClosed" onClick={toggleCollapse}>
        {title}
      </div>
      <div className="collapse-content isCollapsed">{children}</div>
    </article>
  );

  function toggleCollapse(e) {
    e.target.classList.toggle('isClosed');
    expandeElement(e.target.nextElementSibling, 'isCollapsed');
  }

  function expandeElement(element, collapseClass) {
    element.style.height = '';
    element.style.padding = '';
    element.style.transition = 'none';

    const startHeight = window.getComputedStyle(element).height;
    const startpadding = window.getComputedStyle(element).padding;

    element.classList.toggle(collapseClass);
    const height = window.getComputedStyle(element).height;
    const padding = window.getComputedStyle(element).padding;

    element.style.height = startHeight;
    element.style.padding = startpadding;

    requestAnimationFrame(() => {
      element.style.transition = '';

      requestAnimationFrame(() => {
        element.style.height = height;
        element.style.padding = padding;
      });
    });
    element.addEventListener('transitionned', () => {
      element.style.height = '';
      element.style.padding = '';
      element.addEventListener('transitionned', () => {
        element.removeEventListener('transitionned', arguments.callee);
      });
    });
  }
}

export default Collapse;
