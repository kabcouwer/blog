import profilePic from "../lib/images/avatar.jpg";

export const name = "Kim Abcouwer";
export const avatar = profilePic;

var textColors = {
  white: "#fff",
  coral: "#da7b93",
  teal: "#319795",
};

export const bio = () => {
  return (
    <>
      I am an experienced{" "}
      <b style={{ color: textColors.coral }}>software engineer</b> and an adept
      <b style={{ color: textColors.coral }}> problem solver </b> who is looking
      to learn and use my skills to help create a more sustainable and kinder
      future. For that reason, I am actively looking for my next position in the
      <b style={{ color: textColors.white }}> clean</b> or{" "}
      <b style={{ color: textColors.white }}>civic tech</b> space.
      <br></br>
      <br></br>I am proficient in{" "}
      <b style={{ color: textColors.teal }}>Ruby on Rails</b>,{" "}
      <b style={{ color: textColors.teal }}>PHP</b>, and{" "}
      <b style={{ color: textColors.teal }}>SQL</b>. My previous experience has
      been more backend focused, so I decided to strengthen my frontend skills
      with the development of this website. I hope you like it!
    </>
  );
};
