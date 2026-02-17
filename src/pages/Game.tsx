import { Navigation } from "../components"
import { Stack, Text, Title, Container, Group, Image, Button } from "@mantine/core"
import { useEffect, useState } from "react"
import { useInterval } from "@mantine/hooks"
import { IconArrowRight } from "@tabler/icons-react"
import { getGameQuestions } from "../lib/questionBank"

import classes from './styles.module.css'

const Game = ({ setModal, setGameState, setScore }: PageType) => {

  const [second, setSecond] = useState<number>(3)
  const timer = useInterval(() => setSecond((s) => s - 1), 1000, { autoInvoke: true })

  const [gameStarted, setGameStarted] = useState<boolean>(false)

  // Initialize game questions on mount
  const [gameQuestions] = useState(() => getGameQuestions())
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const currentQ = gameQuestions[currentQuestion]

  const [userAnswer, setUserAnswer] = useState<boolean | null>(null)
  const [timeLeft, setTimeLeft] = useState<number>(10)

  const [totalScore, setTotalScore] = useState<number>(0)

  const gameTimer = useInterval(() => setTimeLeft((t) => t - 1), 1000, { autoInvoke: false })

  useEffect(() => {
    if (second === 0 && !gameStarted) {
      setGameStarted(true)
      gameTimer.start()
    } else if (second === 0 && gameStarted) {
      timer.stop()
    }
    return timer.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [second, gameStarted])

  const handleStop = () => {
    setTimeLeft(0)
    gameTimer.stop()
    setTotalScore((score) => (userAnswer === currentQ.correctIsFirst) ? score + 1 : score)
  }

  useEffect(() => {
    if (timeLeft === 0) {
      handleStop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft])

  const handleImageClick = (isFirstImage: boolean) => {
    if (timeLeft <= 0) return
    setUserAnswer(isFirstImage)
  }


  const handleNext = () => {
    const MAX_QUESTIONS = 10
    if (currentQuestion >= MAX_QUESTIONS - 1) {
      setScore?.(totalScore)
      setGameState?.('ended')
      return
    }
    gameTimer.start()
    setUserAnswer(null)
    setTimeLeft(10)
    setCurrentQuestion((prev) => prev + 1)
  }

  const showLabels = timeLeft <= 0

  return (
    <Stack className={classes.game}>
      <Navigation setModal={setModal} />
      {
        gameStarted ? (
          <Stack style={{ flex: 1, justifyContent: 'space-between' }}>
            {/* Container 1: Countdown + Info */}
            <Group className={classes.infoContainer}>
              {
                timeLeft > 0 ?
                  <Container className={classes.countdownContainer}>
                    <Container className={classes.circleWrapper}>
                      <svg className={classes.countdownCircle} viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          className={classes.countdownTrack}
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          className={classes.countdownProgress}
                          style={{
                            strokeDasharray: `${(timeLeft / 10) * 314} 314`,
                          }}
                        />
                      </svg>
                      <Text className={classes.countdownText}>{timeLeft}</Text>
                    </Container>
                  </Container>
                  :
                  <Text className={classes.timesUp}>
                    Times Up!
                  </Text>
              }
              <Stack className={classes.info}>
                <Title className={classes.title} order={2}>Identify the Real Image</Title>
                <Text className={classes.subtitle} size="sm" c="dimmed">
                  Look carefully at both images and determine which one is Real. Trust your instincts!
                </Text>
              </Stack>
            </Group>

            {/* Container 2: Images */}
            <Group className={classes.imagesContainer} grow justify="center" align="center">
              <div
                className={`${classes.imageWrapper} ${userAnswer === true ? classes.selected : ''}`}
                onClick={() => handleImageClick(true)}
              >
                <Image
                  src={currentQ.images[0].url}
                  alt="Image 1"
                  className={classes.gameImage}
                />
                {showLabels && (
                  <Text className={`${classes.label} ${currentQ.images[0].isAi ? classes.ai : classes.real}`}>
                    {currentQ.images[0].isAi ? 'AI' : 'Real'}
                  </Text>
                )}
              </div>

              <div
                className={`${classes.imageWrapper} ${userAnswer === false ? classes.selected : ''}`}
                onClick={() => handleImageClick(false)}
              >
                <Image
                  src={currentQ.images[1].url}
                  alt="Image 2"
                  className={classes.gameImage}
                />
                {showLabels && (
                  <Text className={`${classes.label} ${currentQ.images[1].isAi ? classes.ai : classes.real}`}>
                    {currentQ.images[1].isAi ? 'AI' : 'Real'}
                  </Text>
                )}
              </div>
            </Group>
            <Text className={classes.score}>
              Score: {totalScore} / 10
            </Text>
            {/* Bottom Actions */}
            <Button style={{
              backgroundPosition: -((currentQuestion + 1) * 10) + "%"
            }} 
            onClick={timeLeft > 0 ? handleStop : handleNext} className={classes.next} leftSection={<IconArrowRight size={18} />}>
              {timeLeft > 0 ? "I'm sure" : "Next"}
            </Button>
          </Stack>
        ) : (
          <Title order={1} className={classes.countdown}>
            {second}
          </Title>
        )
      }
    </Stack>
  )
}

export default Game
