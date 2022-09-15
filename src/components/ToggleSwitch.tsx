import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

interface IToggle {
  isDark: boolean;
}
const ToggleWrapper = styled.div<IToggle>`
  position: absolute;
  width: 200px;

  top: calc(5vh - 23px);
  left: calc(50vh - 160px);

  label {
    position: absolute;
    width: 100px;
    height: 46px;
    background-color: ${(props) => (props.isDark ? "#28292c" : "white")};
    border-radius: 50px;
    cursor: pointer;
    border: none;
    input {
      position: absolute;
      display: none;
    }

    .slider {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      transition: 0.3s;
      border: none;
    }

    input:checked ~ .slider {
      background-color: white;
    }

    .slider::before {
      content: "";
      position: absolute;
      top: 8px;
      left: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: inset 12px -2px 0px 0px white;
      background-color: #28292c;

      transition: 0.3s;
    }

    input:checked ~ .slider::before {
      transform: translateX(50px);
      background-color: #28292c;
      box-shadow: none;
    }
  }
`;

function ToggleSwitch() {
  const [isDark, setIsDarkAtom] = useRecoilState(isDarkAtom);
  const toggleTheme = () => setIsDarkAtom((prev) => !prev);

  return (
    <ToggleWrapper isDark={isDark}>
      <label>
        <input type="checkbox" checked={!isDark} onClick={toggleTheme} />
        <span className="slider"></span>
      </label>
    </ToggleWrapper>
  );
}

export default ToggleSwitch;
