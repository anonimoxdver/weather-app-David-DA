

export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  marginRight: '8%', width: '20px',  fontSize: '0px'}}
        onClick={onClick}
      />
    );
  }

export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  marginLeft:'8%', zIndex: '2', width: '20px',  fontSize: '0px' }}
        onClick={onClick}
      />
    );
  }