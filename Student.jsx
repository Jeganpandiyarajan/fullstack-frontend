import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <div>
      <tbody>
        <table className="hii">
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>isMarried</th>
            <td>{props.isMarried ? "Yes" : "No"}</td>
          </tr>
        </table>
      </tbody>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
};

Student.defaultProps = {
  name: "no Name mentioned",
  age: 0,
  isMarried: false,
};

export default Student;

