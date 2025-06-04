const TimelineItem = ({ title, date, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>

      {/* ✅ 直接渲染 description，而不是强行包一层 <p> */}
      <div className="timeline-text">
        {description}
      </div>
    </li>
  );
}

export default TimelineItem;
