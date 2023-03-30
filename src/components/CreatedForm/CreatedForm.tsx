import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./CreatedForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { CarterCard } from "../CardList/CardList";

enum FractionEnum {
  Neutral = "Neutral",
  Northerners = "Northerners",
  Scoiatael = "Scoiatael",
  Skellige = "Skellige",
}

type Inputs = {
  name: string;
  date: string;
  belonging: FractionEnum;
  file: string;
  checkbox: boolean;
  frame: boolean;
};

interface CardCreationArr {
  cardsParams: CarterCard[];
  setCardsParams: Dispatch<SetStateAction<CarterCard[]>>;
}

function sumCalculation(
  cost1: HTMLInputElement,
  cost2: HTMLInputElement,
  cost3: HTMLInputElement,
) {
  const sumArr = [];
  cost1.checked && sumArr.push(+cost1.value);
  cost2.checked && sumArr.push(+cost2.value);
  cost3.checked && sumArr.push(+cost3.value);
  const sumOfCard = sumArr.reduce((acc, el) => {
    return acc + el;
  }, 0);
  return sumOfCard;
}

export const CreatedForm: React.FC<CardCreationArr> = ({
  cardsParams,
  setCardsParams,
}) => {
  const [cardCreated, setCardCreated] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<Inputs> = (data, defaultValues) => {
    const cost1 = defaultValues?.target.checkbox[0];
    const cost2 = defaultValues?.target.checkbox[1];
    const cost3 = defaultValues?.target.checkbox[2];
    sumCalculation(cost1, cost2, cost3);

    const newCard = {
      name: defaultValues?.target.name.value,
      date: defaultValues?.target.date.value,
      belonging: defaultValues?.target.belonging.value,
      upload: defaultValues?.target.file.files[0],
      cost: sumCalculation(cost1, cost2, cost3),
      frame: !!+defaultValues?.target.frame.value,
    };

    const copy = Object.assign([], cardsParams);
    copy.push(newCard);
    setCardsParams(copy);
    setCardCreated(true);
    reset();
  };

  useEffect(() => {
    setTimeout(() => {
      setCardCreated(false);
    }, 3000);
  }, [cardCreated]);

  return (
    <form
      className={styles.form__container}
      onSubmit={handleSubmit(onSubmit)}
      data-testid="test"
    >
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
            {...register("belonging", {
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
        {errors?.belonging && (
          <div className={styles.error_mes}>{errors?.belonging?.message}</div>
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
          <input
            type="radio"
            value={1}
            {...register("frame", { required: true })}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value={0}
            {...register("frame", { required: true })}
          />
          No
        </label>
        {errors?.frame && (
          <div className={styles.error_mes}>Error! Check the cost</div>
        )}
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
        {cardCreated && <div className={styles.success}>card created!</div>}
      </div>
      <input type="submit" value="SEND" />
    </form>
  );
};
