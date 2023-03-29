import React from "react";
import styles from "./FormPage.module.css";
import { CreatedForm } from "../CreatedForm";
import { Card } from "../Card";
import { CarterCard } from "../CardList/CardList";
import { FormCreate } from "../CreatedForm/CreatedForm";

export class FormPage extends React.Component {
  state = {
    cardsParams: [] as CarterCard[],
    name: {
      title: "Card name: ",
      type: "text",
      refInput: React.createRef<HTMLInputElement>(),
    },
    date: {
      title: "Creation date: ",
      type: "date",
      refInput: React.createRef<HTMLInputElement>(),
    },
    file: {
      title: "Image: ",
      type: "file",
      refInput: React.createRef<HTMLInputElement>(),
    },
    fraction: {
      title: "Fraction: ",
      refSelect: React.createRef<HTMLSelectElement>(),
    },
    cost: [
      { title: "1", refInput: React.createRef<HTMLInputElement>() },
      { title: "5", refInput: React.createRef<HTMLInputElement>() },
      { title: "10", refInput: React.createRef<HTMLInputElement>() },
    ],
    frame: [
      { title: "Yes", refInput: React.createRef<HTMLInputElement>() },
      { title: "No", refInput: React.createRef<HTMLInputElement>() },
    ],
    nameError: false,
    dateError: false,
    costError: false,
    imageError: false,
    FractionError: false,
    goldenFrameError: false,
    success: false,
    formRef: React.createRef<HTMLFormElement>(),
  };
  formChecker = () => {
    const name = (this.state.name.refInput.current as HTMLInputElement).value;
    const date = (this.state.date.refInput.current as HTMLInputElement).value;
    const upload = this.state.file.refInput.current?.files?.[0];
    const belonging = (
      this.state.fraction.refSelect.current as HTMLSelectElement
    ).value;
    const costChecked = [
      (this.state.cost[0].refInput.current as HTMLInputElement).checked ? 1 : 0,
      (this.state.cost[1].refInput.current as HTMLInputElement).checked ? 5 : 0,
      (this.state.cost[2].refInput.current as HTMLInputElement).checked
        ? 10
        : 0,
    ];

    const frame =
      this.state.frame[0].refInput.current?.checked ||
      this.state.frame[1].refInput.current?.checked
        ? true
        : false;

    const cost = costChecked.reduce((acc, el) => acc + el);

    const newCard = {
      name: name,
      date: date,
      upload: upload,
      belonging: belonging,
      cost: cost,
      frame: this.state.frame[0].refInput.current?.checked,
    };

    newCard.name &&
    !Number.isFinite(+newCard.name.slice(0, 1)) &&
    newCard.name.slice(0, 1) === newCard.name.slice(0, 1).toUpperCase() &&
    newCard.name.length <= 10
      ? this.setState({ nameError: false })
      : this.setState({ nameError: true });

    newCard.date.length
      ? this.setState({ dateError: false })
      : this.setState({ dateError: true });

    newCard.upload
      ? this.setState({ imageError: false })
      : this.setState({ imageError: true });

    newCard.cost
      ? this.setState({ costError: false })
      : this.setState({ costError: true });

    newCard.belonging
      ? this.setState({ FractionError: false })
      : this.setState({ FractionError: true });

    this.state.frame[0].refInput.current?.checked ||
    this.state.frame[1].refInput.current?.checked
      ? this.setState({ goldenFrameError: false })
      : this.setState({ goldenFrameError: true });

    if (
      newCard.name &&
      !Number.isFinite(+newCard.name.slice(0, 1)) &&
      newCard.name.slice(0, 1) === newCard.name.slice(0, 1).toUpperCase() &&
      newCard.name.length <= 10 &&
      newCard.date.length &&
      newCard.upload &&
      newCard.cost &&
      newCard.belonging &&
      frame
    ) {
      this.state.cardsParams.push(newCard);
      this.setState({ cardsParams: this.state.cardsParams, success: true });
      this.state.formRef.current?.reset();
    }
  };
  componentDidUpdate(prevProps: FormCreate, prevState: FormCreate) {
    if (this.state.success !== prevState.success) {
      setTimeout(() => {
        this.setState({ success: false });
      }, 3000);
    }
  }
  render() {
    return (
      <div className={styles.formPage} data-testid="form_page">
        <CreatedForm />
        <button type="button" onClick={this.formChecker}>
          SEND
        </button>
        <div className={styles.newCard__container}>
          {this.state.cardsParams.map((el, i) => {
            return <Card key={i} {...el} />;
          })}
        </div>
      </div>
    );
  }
}
