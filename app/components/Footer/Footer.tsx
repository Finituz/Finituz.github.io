import { RiDiscordFill, RiLinkedinBoxFill, RiRedditFill } from "react-icons/ri";
import Listitem from "./ListItem/ListItem";
import NewsLetter from "../NewsLetter/NewsLetter";

export default function Footer() {
  return (
    <footer className="bg-red-900 border-t-2 text-left text-2xl px-10 py-5">
      <span className="flex flex-col md:gap-0 md:flex-row gap-5 justify-between">
        <div>
          <strong> Social medias </strong>
          <hr />
          <ul>
            <Listitem
              url="https://www.linkedin.com/company/103950563"
              target="_blank"
            >
              <RiLinkedinBoxFill /> Linkedin
            </Listitem>
            <Listitem url="https://discord.gg/ttAE9N4BuZ" target="_blank">
              <RiDiscordFill /> Discord
            </Listitem>
            <Listitem url="https://www.reddit.com/r/finituz/" target="_blank">
              <RiRedditFill /> Reddit
            </Listitem>
          </ul>
        </div>
        <div>
          <strong>Contact us</strong>
          <hr />
          <ul>
            <Listitem url="mailto:feedback@finituz.com" target="_blank">
              feedback@finituz.com
            </Listitem>
            <Listitem url="workwithus@finituz.com" target="_blank">
              workwithus@finituz.com
            </Listitem>
            <Listitem url="contactus@finituz.com" target="_blank">
              contactus@finituz.com
            </Listitem>
          </ul>
        </div>
        <div>
          <strong>Our news letter!</strong>
          <hr />
          <NewsLetter />
        </div>
      </span>
      <div className="mt-5 text-center">
        Finituz Studio&copy;{new Date().getFullYear()}
      </div>
    </footer>
  );
}
