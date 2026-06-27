import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Deck.module.css";
import { useParams } from "react-router-dom";
import type Card from "../interfaces/Card";
import UserAuth from "../AuthContext";

function Study() {
    const [error, setError] = useState({status: false, message: ""});
    const [loading, setLoading] = useState(false);
    const [deckName, setDeckName] = useState();
    const { deckId } = useParams();
    const [frontCards, setFrontCards] = useState<Card[]>([]);
    const [backCards, setBackCards] = useState<Card[]>([]);
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardSide, setCardSide] = useState("Front");
    const [cardNum, setCardNum] = useState(1);
    const [total, setTotal] = useState(1);
    const { session } = UserAuth();
    const [animation, setAnimation] = useState("none");

    function flipCard() {
        if (cardRef.current) {
            cardRef.current.classList.toggle(styles.flip);
            setCardSide(prev => (prev === "Front") ? "Back" : "Front");
        }
    }

    function showNextCard() {
        if ((cardNum + 1) <= total) {
            if (cardSide === "Back") {
                flipCard();
            }
            setCardNum(cardNum + 1);
        }
    }

    function showPrevCard() {
        if ((cardNum - 1) >= 1) {
            if (cardSide === "Back") {
                flipCard();
            }
            setCardNum(cardNum - 1);
        }
    }

    const fetchDeckData = async () => {
        setLoading(true);

        try {
            /*
            // get deck data from supabase
            const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${userId}/deck/${deckId}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            // get message and deck data
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            // set deck name
            setDeckName(data.name);*/


        } catch(error: any) {
            setError({ status: true, message: error.message });

        } finally {
            setLoading(false);
        }
    }

    const fetchCardContent = async () => {
        setLoading(true);

        try {
            /*
            // get card content from mongodb
            const docResponse = await fetch(`${import.meta.env.VITE_API_URL}/user/${userId}/deck/${deckId}/cards`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            // get message and card content
            const docData = await docResponse.json();

            if (!docResponse.ok) {
                throw new Error(docData.message);
            }

            // set deck content
            setFrontCards(docData.frontCards);
            setBackCards(docData.backCards);
            setTotal(docData.frontCards.length);*/
            

        } catch(error: any) {
            setError({ status: true, message: error.message });

        } finally {
            setLoading(false);
        }
    }

    const fetchProfileData = async () => {
        setLoading(true);

        try {
            /*
            // get profile data from supabase
            const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${userId}/profile`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            // get message and deck data
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }
            
            // set background animation
            setAnimation(data.animationType);*/

        } catch(error: any) {
            setError({ status: true, message: error.message });

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
      //  fetchDeckData();
     //   fetchCardContent();
      //  fetchProfileData();
    }, []);

    return (
        <div className={styles.main}>
            <div className={`${styles.background} ${styles[animation]}`} />
            <div className={styles.mainContainer}>
                <Navbar />
                <div className={styles.subContainer}>
                    <div className={"app-title"}>{deckName || "Flashier Cards"}</div>
                    { (loading) ?
                        <div className={"error-message"}>
                            Loading request...
                        </div>
                    :
                        (error.status) ?
                            <div className={"error-message"}>{error.message}</div>
                        :
                            <></>
                    }
                    <div className={styles.deck}>
                        <div className={styles.card} onClick={() => flipCard()} ref={cardRef}>
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront}>
                                    {/* 
                                    {frontCards[cardNum - 1].text.map((text, textId) =>
                                        <div 
                                            key={textId}
                                            style={{
                                                width: text.width + "px",
                                                color: text.color,
                                               // fontSize: text.fontSize,
                                                fontFamily: "Imprima, sans-serif",
                                                position: "absolute",
                                                left: text.x + "px",
                                                top: text.y + "px"
                                            }}
                                        >
                                            {text.input}
                                        </div>
                                    )}
                                    {frontCards[cardNum - 1].gif.map((gif, gifId) =>
                                        <img 
                                            key={gifId}
                                            src={gif.url}
                                            alt="sticker"
                                            style={{
                                                width: gif.width + "px",
                                                height: gif.height + "px",
                                                position: "absolute",
                                                left: gif.x + "px",
                                                top: gif.y + "px"
                                            }}
                                        />
                                    )}
                                    {frontCards[cardNum - 1].sticker.map((sticker, stickerId) =>
                                        <img 
                                            key={stickerId}
                                            src={sticker.url}
                                            alt="sticker"
                                            style={{
                                                width: sticker.width + "px",
                                                height: sticker.height + "px",
                                                position: "absolute",
                                                left: sticker.x + "px",
                                                top: sticker.y + "px"
                                            }}
                                        />
                                    )}*/}
                                </div>
                                <div className={styles.cardBack}>
                                    {/* 
                                    {backCards[cardNum - 1].text.map((text, textId) =>
                                        <div
                                            key={textId}
                                            style={{
                                                width: text.width + "px",
                                                color: text.color,
                                               // fontSize: text.fontSize,
                                                fontFamily: "Imprima, sans-serif",
                                                position: "absolute",
                                                left: text.x + "px",
                                                top: text.y + "px"
                                            }}
                                        >
                                            {text.input}
                                        </div>
                                    )}
                                    {backCards[cardNum - 1].gif.map((gif, gifId) =>
                                        <img 
                                            key={gifId}
                                            src={gif.url}
                                            alt="sticker"
                                            style={{
                                                width: gif.width + "px",
                                                height: gif.height + "px",
                                                position: "absolute",
                                                left: gif.x + "px",
                                                top: gif.y + "px"
                                            }}
                                        />
                                    )}
                                    {backCards[cardNum - 1].sticker.map((sticker, stickerId) =>
                                        <img 
                                            key={stickerId}
                                            src={sticker.url}
                                            alt="sticker"
                                            style={{
                                                width: sticker.width + "px",
                                                height: sticker.height + "px",
                                                position: "absolute",
                                                left: sticker.x + "px",
                                                top: sticker.y + "px"
                                            }}
                                        />
                                    )}*/}
                                </div>
                            </div>
                        </div>
                        <div className={styles.deckNav}>
                            <button disabled={cardNum === 1} onClick={showPrevCard}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <span>{cardNum}/{total}</span>
                            <button disabled={cardNum === total} onClick={showNextCard}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Study;