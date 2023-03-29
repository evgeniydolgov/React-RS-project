import React from "react";
import styles from "./CreatedForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

enum FractionEnum {
  empty = "",
  Neutral = "Neutral",
  Northerners = "Northerners",
  Scoiatael = "Scoiatael",
  Skellige = "Skellige",
}

type Inputs = {
  name: string;
  date: string;
  fraction: FractionEnum;
  file: string;
  checkbox: boolean;
  frame: string;
};

export const CreatedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ reValidateMode: "onSubmit" });

  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  return (
    <form className={styles.form__container} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Card name:{" "}
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Error! Fill the card name",
              },
              pattern: {
                value: /^[A-ZА-ЯЁ].+$/,
                message: "First letter must be capitalized",
              },
              maxLength: {
                value: 10,
                message: "Maximum 10 characters",
              },
            })}
          />
        </label>

        {errors?.name && (
          <div className={styles.error_mes}>{errors?.name?.message}</div>
        )}
      </div>
      <div>
        <label>
          Creation date:{" "}
          <input
            type="date"
            {...register("date", {
              required: {
                value: true,
                message: "Error!Please indicate the date of creation",
              },
            })}
          />
        </label>
        {errors?.date && (
          <div className={styles.error_mes}>{errors?.date?.message}</div>
        )}
      </div>
      <div>
        <label>
          Fraction:{" "}
          <select
            defaultValue={""}
            {...register("fraction", {
              required: {
                value: true,
                message: "Error! Please change the fraction",
              },
            })}
          >
            <option value="" disabled></option>
            <option value="Neutral">Neutral</option>
            <option value="Northerners">Northerners</option>
            <option value="Scoiatael">Scoiatael</option>
            <option value="Skellige">Skellige</option>
          </select>
        </label>
        {errors?.fraction && (
          <div className={styles.error_mes}>{errors?.fraction?.message}</div>
        )}
      </div>
      <div className={styles.checkbox_input}>
        <p>Card cost: </p>
        <label>
          <input
            value={1}
            type="checkbox"
            {...register("checkbox", {
              required: true,
            })}
          />{" "}
          1$
        </label>
        <label>
          <input
            value={5}
            type="checkbox"
            {...register("checkbox", {
              required: true,
            })}
          />{" "}
          5$
        </label>
        <label>
          <input
            value={10}
            type="checkbox"
            {...register("checkbox", {
              required: true,
            })}
          />{" "}
          10$
        </label>
        {errors?.checkbox && (
          <div className={styles.error_mes}>Error! Check the cost</div>
        )}
      </div>
      <div>
        Golden frame:{" "}
        <label>
          <input type="radio" value={"yes"} {...register("frame")} />
          Yes
        </label>
        <label>
          <input type="radio" value={"no"} {...register("frame")} />
          No
        </label>
      </div>
      <div>
        <label>
          Image:{" "}
          <input
            type="file"
            {...register("file", {
              required: {
                value: true,
                message: "Error!Please upload the file",
              },
            })}
          />
        </label>
        {errors?.file && (
          <div className={styles.error_mes}>{errors?.file?.message}</div>
        )}
        {true && <div className={styles.success}>card created!</div>}
      </div>
      <input type="submit" value="SEND" />
    </form>
  );
};
