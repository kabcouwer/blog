import profilePic from "../lib/images/avatar.jpg";

export const name = "Kim Abcouwer";
export const avatar = profilePic;
export const bio = () => {
  return (
    <>
      I am an experienced{" "}
      <b style={{ ["color" as any]: "#ef5350" }}>software engineer</b> and an
      adept <b>problem solver </b>
      who is looking to learn and use my skills to help create a more
      sustainable and kinder future. For that reason, I am actively looking for
      my next position in the <b>clean</b> or <b>civic tech</b> space.<br></br>
      <br></br>I am proficient in <b>Ruby on Rails</b>, <b>PHP</b>, and{" "}
      <b>SQL</b>. My previous experience has been more backend focused, so I
      decided to strengthen my frontend skills with the development of this
      website. I hope you like it!
    </>
  );
};
