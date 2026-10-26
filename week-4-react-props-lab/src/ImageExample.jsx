export default function ImageExample({ src, alt, width, onClick }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      onClick={onClick}
      style={{
        borderRadius: "10px",
        cursor: "pointer"
      }}
    />
  );
}