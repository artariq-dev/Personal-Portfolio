const PixelBtn = ({ as: Tag = 'button', className = '', children, ...props }) => (
  <Tag className={`pixel-btn ${className}`} {...props}>
    {children}
  </Tag>
);

export default PixelBtn;
