import "./NextBtn.css";
export default function NextBtn(props) {
  return (
    <button type="submit" className="nextBtn">
      {props.confirm ? props.confirm : "Next Step"}
    </button>
  );
}
