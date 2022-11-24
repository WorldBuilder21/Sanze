import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { UserAuth } from "../../utils/Context/AuthContext";
import { useNavigate } from "react-router";
import { TextField } from "@mui/material";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { googleSignIn, user, signIn } = UserAuth();

  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    getValues,
    register,
    control,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await googleSignIn().then(() => setIsLoading(false));
      // setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user, navigate]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const { email, password } = getValues();
    try {
      setIsLoading(true);
      await signIn(email, password);
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex bg-zinc-800 flex-col justify-center items-center h-screen">
      <div className="p-4 w-full max-w-sm bg-zinc-800 rounded-lg border border-neutral-900  drop-shadow-xl sm:p-6 md:p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="new-password"
          className="space-y-6"
          // action="#"
        >
          <h5 className="text-4xl font-bold text-center text-white">Sign In</h5>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            rules={{
              required: "This field is required",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "This is an invalid email",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                margin="normal"
                type="text"
                inputProps={{
                  style: { color: "white" },
                  autoComplete: "off",
                  form: {
                    autocomplete: "off",
                  },
                }}
                value={value}
                InputLabelProps={{
                  style: {
                    color: "grey",
                  },
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "yellow",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "grey",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "yellow",
                    },
                  },
                }}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                fullWidth
                label="Email"
              />
            )}
          />
          <Controller
            name="password"
            defaultValue=""
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextField
                  margin="normal"
                  InputLabelProps={{
                    style: {
                      color: "grey",
                    },
                  }}
                  value={value}
                  inputProps={{ style: { color: "white" } }}
                  sx={{
                    "& label.Mui-focused": {
                      color: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "grey",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "yellow",
                      },
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "grey",
                    },
                  }}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                  label="Password"
                  id="password"
                  autoComplete="new-password"
                  type="password"
                />
              </>
            )}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full disabled:bg-slate-400 disabled:text-slate-500 text-white bg-lime-600 hover:bg-lime-700  font-medium rounded-lg text-sm px-6 py-2.5 text-center "
          >
            Sign in
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full mt-4 disabled:bg-slate-400 disabled:text-slate-500 text-white p-2 bg-zinc-800 border hover:bg-zinc-900 border-neutral-900  tracking-tight font-semibold rounded-md shadow-md flex justify-center items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="w-4"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="#EA4335"
              d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0C7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"
            ></path>
            <path
              fill="#34A853"
              d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"
            ></path>
            <path
              fill="#4A90E2"
              d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9c0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"
            ></path>
            <path
              fill="#FBBC05"
              d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"
            ></path>
          </svg>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
