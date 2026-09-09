import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Auth(){
    const [messages, setMessages] = useState([
  "Your universe awaits.",
  "Your story continues here.",
  "Your world is waiting.",
  "Step back into your world.",
  "Something great awaits you.",
  "Your journey starts again.",
  "Welcome back to your world.",
  "Your next chapter awaits.",
  "The door is open.",
  "Your space awaits.",
  "Enter your own universe.",
  "Your world begins here.",
  "Come back to where you belong.",
  "The adventure awaits.",
  "Your moment is waiting.",
  "Everything is still here.",
  "Your journey isn't over.",
  "There's more waiting for you.",
  "Return to your world.",
  "Your next move awaits.",
  "A new chapter is waiting.",
  "Your digital world awaits.",
  "Step into what’s yours.",
  "Your story is waiting.",
  "The world awaits your return."
])
    return(
        <main className='h-full flex justify-center items-center'>
            <h1>{messages[Math.floor(Math.random() * messages.length)]}</h1>
            <section>
        <form>
            
        </form>
        </section>
        </main>
    )
}