import React, { use, useEffect, useRef, useState } from "react";
import {
  Content,
  Header,
  GameState,
  GameDetials,
  MatchResults,
  Timer,
  Body,
} from "./GameStyle";
import { BarsOutlined } from "@ant-design/icons";
import ModalSection from "./modal/ModalSection";
import { useDispatch, useSelector } from "react-redux";
import { setGamePause, setGameStart } from "@/redux/gameState/gameState";
import wonFunction from "./wonFunction";
import EazyLevel from "./difficultyLevelReducer/EazyLevel";
import MediumLevel from "./difficultyLevelReducer/MediumLevel";
import HardLevel from "./difficultyLevelReducer/HardLevel";

const Game = ({ changeNav }: any) => {
  const startWithSymbol = useSelector(
    (state: any) => state.startWithSymbolReducer.startWithSymbol
  );
  const gameStart = useSelector(
    (state: any) => state.gameStateReducer.gameStart
  );
  const gamePause = useSelector(
    (state: any) => state.gameStateReducer.gamePause
  );
  const countDown = useSelector(
    (state: any) => state.timerCountDownReducer.countDown
  );
  const isTimer = useSelector(
    (state: any) => state.timerCountDownReducer.isTimer
  );

  const isSoundEffect = useSelector(
    (state: any) => state.soundReducer.isSoundEffect
  );
  const difficultyLevel = useSelector(
    (state: any) => state.difficultyLevelReducer.difficultyLevel
  );
  const playWith = useSelector((state: any) => state.playWithReducer.playWith);
  const dispatch = useDispatch();
  const [countDownTimer, setCountDownTimer] = useState(120);
  const [isModalOpen, setIsModalOpen]: any = useState(false);
  const [modalType, setModalType] = useState("");
  const [steps, setSteps] = useState(1);
  const [selected, setSelected]: any = useState([]);
  const [winner, setWinner] = useState("");
  const [currentSymbol, setCurrentSymbol] = useState("");
  const [runSoundClick, setRunSoundClick] = useState(false);
  const [runSoundWon, setRunSoundWon] = useState(false);
  const [score, setScore]: any = useState([{ x: 0, o: 0 }]);
  const [playing, setPlaying] = useState(false);
  const [whoWon, setWhoWon] = useState("");
  const [data, setData]: any = useState([]);
  const [botSymbol, setBotSymbol] = useState("");
  const [playerSymbol, setPlayerSymbol] = useState("");
  const key: any = sessionStorage.getItem("score");
  const [disabledNextGame, setDisabledNextGame] = useState(true);
  const timerId: any = useRef();
  const botId: any = useRef();
  const handleDisabled = playing || gameStart == false;
  const getFromSessionStorage = JSON.parse(key);
  const formatTime = (time: number) => {
    let min: number | string = Math.floor(time / 60);
    let sec: number | string = Math.floor(time - min * 60);
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    return min + ":" + sec;
  };
  const handleSymbol = (id: number) => {
    return data?.find((e: any) => e?.id === id)?.symbol;
  };
  const handleSoundClick = () => {
    setRunSoundClick(true);
    setTimeout(() => {
      setRunSoundClick(false);
    }, 200);
  };
  const handleSoundWon = () => {
    setRunSoundWon(true);
    setTimeout(() => {
      setRunSoundWon(false);
    }, 3000);
  };
  const handleClickBar = () => {
    setIsModalOpen(true);
    dispatch(setGamePause(true));
  };
  const handleClick = (n: number) => {
    handleSoundClick();
    if (steps === 10) {
      setSteps(1);
    } else {
      if (selected.includes(n) === false && gameStart) {
        setCountDownTimer(countDown);
        setSteps((prev) => prev + 1);
        setSelected((prev: any) => [...prev, n]);
        setData((prev: any) => [...prev, { id: n, symbol: currentSymbol }]);
        setCurrentSymbol((prev) => (prev === "X" ? "O" : "X"));
      }
    }
  };
  const handleWon = (winner: string) => {
    setPlaying(true);
    handleSoundWon();
    dispatch(setGameStart(false));
    setModalType("won");
    setWinner(winner);
    setCurrentSymbol(winner);
    setIsModalOpen(true);
    setDisabledNextGame(true);
    setTimeout(() => {
      setDisabledNextGame(false);
    }, 2500);
    if (startWithSymbol == winner) {
      setWhoWon("player");
    } else {
      setWhoWon("computer");
    }
    sessionStorage.setItem(
      "score",
      JSON.stringify([
        {
          x: winner == "X" ? score[0]?.x + 1 : score[0].x,
          o: winner == "O" ? score[0]?.o + 1 : score[0].o,
        },
      ])
    );
    setScore([
      {
        x: winner == "X" ? score[0]?.x + 1 : score[0].x,
        o: winner == "O" ? score[0]?.o + 1 : score[0].o,
      },
    ]);
    return () => clearTimeout(botId?.current);
  };
  const handleTied = () => {
    dispatch(setGameStart(false));
    setModalType("tied");
    setIsModalOpen(true);
    if (score[0].x == 0 && score[0].o == 0) {
      setCurrentSymbol(startWithSymbol);
    } else if (winner != "") {
      setCurrentSymbol(winner);
    }
  };
  const keysId = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleModalResponse = (v: string) => {
    if (v === "continue") {
      setIsModalOpen(false);
      dispatch(setGamePause(false));
    } else {
      setData([]);
      setSelected([]);
      setSteps(1);
      setCountDownTimer(countDown);
      dispatch(setGameStart(true));
      setModalType("");
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    if (getFromSessionStorage == null) {
      sessionStorage.setItem(
        "score",
        JSON.stringify([
          {
            x: 0,
            o: 0,
          },
        ])
      );
    } else {
      setScore(getFromSessionStorage);
    }
  }, []);
  useEffect(() => {
    if (playWith === "computer") {
      setPlayerSymbol(startWithSymbol);
      setBotSymbol(startWithSymbol === "X" ? "O" : "X");
    }
    setCurrentSymbol(startWithSymbol);
  }, [startWithSymbol]);
  useEffect(() => {
    if (steps == 10) {
      dispatch(setGameStart(false));
      handleTied();
      setSteps(1);
    }
  }, [steps]);

  useEffect(() => {
    if (isTimer) {
      timerId.current = setInterval(() => {
        if (gameStart && gamePause == false) {
          setCountDownTimer((prev: number) => prev - 1);
        }
      }, 1000);
      return () => clearInterval(timerId?.current);
    }
  }, [gameStart, isTimer, gamePause]);
  useEffect(() => {
    setCountDownTimer(countDown);
  }, [countDown]);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId?.current);
      setCountDownTimer(0);
    }
  }, [countDown]);

  useEffect(() => {
    if (wonFunction(data) == "X") {
      handleWon("X");
    } else if (wonFunction(data) == "O") {
      handleWon("O");
    }
  }, [data]);

  useEffect(() => {
    if (playWith == "computer" && gameStart) {
      if (
        (whoWon == "computer" && [1, 3, 5, 7, 9].includes(steps)) ||
        (whoWon == "player" && [2, 4, 6, 8].includes(steps)) ||
        (whoWon == "" && [2, 4, 6, 8].includes(steps))
      ) {
        setPlaying(true);
        botId.current = setTimeout(() => {
          setCountDownTimer(countDown);
          handleSoundClick();
          setSteps((prev) => prev + 1);
          setCurrentSymbol((prev) => (prev === "X" ? "O" : "X"));
          if (difficultyLevel == "easy") {
            setSelected((prev: any) => [...prev, EazyLevel(data)]);
            setData((prev: any) => [
              ...prev,
              { id: EazyLevel(data), symbol: currentSymbol },
            ]);
          } else if (difficultyLevel == "medium") {
            setSelected((prev: any) => [
              ...prev,
              MediumLevel(data, playerSymbol),
            ]);
            setData((prev: any) => [
              ...prev,
              {
                id: MediumLevel(data, playerSymbol),
                symbol: currentSymbol,
              },
            ]);
          } else if (difficultyLevel == "hard") {
            setSelected((prev: any) => [
              ...prev,
              HardLevel(data, botSymbol, playerSymbol),
            ]);
            setData((prev: any) => [
              ...prev,
              {
                id: HardLevel(data, botSymbol, playerSymbol),
                symbol: currentSymbol,
              },
            ]);
          }
        }, 1500);
      } else {
        setPlaying(false);
      }
    } else {
      setPlaying(false);
    }
  }, [
    playWith,
    whoWon,
    difficultyLevel,
    data,
    countDown,
    playerSymbol,
    botSymbol,
    gameStart,
    botId,
  ]);

  useEffect(() => {
    const RandomNum = keysId.filter((e) => !selected.includes(e))[
      Math.floor(
        Math.random() * keysId.filter((e) => !selected.includes(e)).length
      )
    ];
    if (countDownTimer == 0) {
      handleSoundClick();
      setCountDownTimer(countDown);
      setSteps((prev) => prev + 1);
      setSelected((prev: any) => [...prev, RandomNum]);
      setData((prev: any) => [
        ...prev,
        {
          id: RandomNum,
          symbol: currentSymbol,
        },
      ]);
    }
  }, [countDownTimer]);
  return (
    <Content>
      <ModalSection
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        changeNav={changeNav}
        modalType={modalType}
        handleModalResponse={handleModalResponse}
        winner={winner}
        disabledNextGame={disabledNextGame}
      />
      <Header>
        <GameDetials>
          <MatchResults>
            <div>
              <p>X</p>: {score[0]?.x}
            </div>
            <div>
              <p>O</p>: {score[0]?.o}
            </div>
          </MatchResults>
          <Timer>{formatTime(isTimer ? +countDownTimer : 0)}</Timer>
        </GameDetials>
        <GameState>
          <p>{gamePause == false && gameStart && currentSymbol}</p>
          <sub>
            {gamePause ? (
              "Game Pause"
            ) : gameStart && steps <= 10 ? (
              <>
                Playing
                <span className="first_dot">.</span>{" "}
                <span className="second_dot">.</span>{" "}
                <span className="third_dot">.</span>
              </>
            ) : (
              "Game Ended"
            )}
          </sub>
        </GameState>
        <BarsOutlined onClick={() => handleClickBar()} />
      </Header>
      <Body>
        {runSoundClick && (
          <audio autoPlay muted={!isSoundEffect} hidden>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/music-80552.appspot.com/o/click.mp3?alt=media&token=e93611ae-58d2-4091-9420-d601ffcf6717"
              type="audio/mpeg"
            />
          </audio>
        )}
        {runSoundWon && (
          <audio autoPlay muted={!isSoundEffect} hidden>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/music-80552.appspot.com/o/won.mp3?alt=media&token=11fb5c0b-f005-4879-8f83-d23fc91ecc5b"
              type="audio/mpeg"
            />
          </audio>
        )}
        <div className="top">
          <button
            id="one"
            onClick={() => handleClick(1)}
            disabled={handleDisabled}
          >
            {handleSymbol(1)}
          </button>
          <button
            className="center"
            id="two"
            onClick={() => handleClick(2)}
            disabled={handleDisabled}
          >
            {handleSymbol(2)}
          </button>
          <button
            id="three"
            onClick={() => handleClick(3)}
            disabled={handleDisabled}
          >
            {handleSymbol(3)}
          </button>
        </div>
        <div>
          <button
            id="four"
            onClick={() => handleClick(4)}
            disabled={handleDisabled}
          >
            {handleSymbol(4)}
          </button>
          <button
            className="center"
            id="five"
            onClick={() => handleClick(5)}
            disabled={handleDisabled}
          >
            {handleSymbol(5)}
          </button>
          <button
            id="six"
            onClick={() => handleClick(6)}
            disabled={handleDisabled}
          >
            {handleSymbol(6)}
          </button>
        </div>
        <div className="bottom">
          <button
            id="seven"
            onClick={() => handleClick(7)}
            disabled={handleDisabled}
          >
            {handleSymbol(7)}
          </button>
          <button
            className="center"
            id="eight"
            onClick={() => handleClick(8)}
            disabled={handleDisabled}
          >
            {handleSymbol(8)}
          </button>
          <button
            id="nine"
            onClick={() => handleClick(9)}
            disabled={handleDisabled}
          >
            {handleSymbol(9)}
          </button>
        </div>
      </Body>
    </Content>
  );
};

export default Game;
