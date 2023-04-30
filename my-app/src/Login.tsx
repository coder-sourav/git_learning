import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import { TextField, Typography, makeStyles } from "@material-ui/core";
import { error } from "console";
import { useForm } from "react-hook-form";
import { useFormStyles } from "./FormUi";



interface ILogin {
  emailAddress: string;
  password: string;
}

export default function Login() {
const classes=useFormStyles();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  //Rendering the buttons
  const history = useHistory();
  const renderButtons = () => {
    return (
      <Footer
        primary={{ text: "Login ", onClick: () => console.log("hello") }}
        secondary={{ text: "SignUp ", onClick: () => history.push("/signup") }}
        teritary={{ text: "Home ", onClick: () => history.push("/") }}
      />
    );
  };

  //Rendering the form
  const renderForm = () => {
    return (
      <>
      <div className={classes.textFieldConatiner}>
        <TextField
          type="text"
          id="emailAddress"
          label="Email"
          variant="outlined"
          error={errors.emailAddress?.message !== undefined}
          helperText={errors.emailAddress?.message}
          className={classes.textField}
          {...register("emailAddress", {
            required: "true",
            pattern: {
              value: /\w+@\w+\.\w+/,
              message: "Email Pattern is Not valid",
            },
          })}
        />
        </div>
        <div className={classes.textFieldConatiner}>
        <TextField
          type="text"
          id="password"
          label="Password"
          variant="outlined"
          error={errors.password?.message !== undefined}
          helperText={errors.password?.message}
          className={classes.textField}
          
          {...register("password", {
            required: "true",
          })}
        />
      </div>
      </>
    );
  };

  return (
      <div className={classes.root}>
      
      <form className={classes.container}>
      <Typography variant="h5">Wellcome to the login page</Typography>
      {renderForm()}
      {renderButtons()}
      </form>
      </div>
  );
}
