import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import bookCover from "@/assets/img/logo/book-cover.jpg";

export const Other = () => (
  <div className="flex justify-evenly w-full items-center py-8">
    <div>
      <div className="p-10">
        <h2 className="text-4xl font-bold mt-8">
          <Link
            to={routes.amazon_book}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            An Awkward [Introvert's] Guide to Human Connection
          </Link>
        </h2>
        <p className="mt-4">
          One upon a time, one of my life's passion was to help shy people like
          myself overcome the common fear of social interaction. After many
          years as a struggling shy person, I realized the problem was how I
          approached this problem I had. That problem, was to focus on authentic
          connection. I wrote this book to share my journey and the lessons I
          learned along the way. The book is available on Amazon, and you can
          find it{" "}
          <Link
            to={routes.amazon_book}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-yellow-500"
          >
            here
          </Link>
          .
        </p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="px-10">
            <Button
              variant="outline"
              className="cursor-pointer hover:text-yellow-500 mt-10 uppercase"
              size="lg"
            >
              Learn more
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-indigo-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 max-h-[80vh] w-[80vw] max-w-[1000px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              An Awkward [Introvert's] Guide to Human Connection
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="">
            <p className="mb-4">I was once a super awkward and shy kid.</p>
            <p className="mb-4">
              It became so bad that I was depressed and suicidal. I felt empty
              and lost, and I couldn't quite figure out why. There were plenty
              of people around me, and I was part of a large community! However,
              after years of feeling utter defeat, I figured out exactly what I
              was missing: connection.
            </p>
            <p className="mb-4">
              This story isn't far from many I've come across in my life. You
              know who you are. We're often awkward around others, maybe really
              shy, and we wonder why we can't change or feel so frustrated about
              it.
            </p>
            <p className="mb-4">The answer? Learning to develop connection.</p>
            <p className="mb-4">
              First off, let me mention: it's not all going to be techniques or
              tips. Most of it isn't (though there are plenty of tips).
            </p>
            <p className="mb-4">
              <strong>BONUS:</strong> There are FREE tips and a tricks guide
              inside the book within the first few pages if you so desire.
            </p>
            <p className="mb-4">
              The rest of the book is not solely about the "how-to" or "what to
              do when…". It's here to help you learn and confront the reality of
              who you are, implement it with those closest to you, and grow your
              relationships through CONNECTION.
            </p>
            <p className="mb-4">
              We'll be learning how to connect with others—among your
              co-workers, siblings, old friends, roommates, romantic
              relationships, and, as a bonus, social gatherings. Beginning with
              the people closest to you is most important, and it helps with the
              rest of your life. When you learn to connect with (or better
              connect with) those around you whom you already know, you can then
              learn to connect with others you meet. Additionally, it's much
              easier to connect with those you already see on a daily basis due
              to life's circumstances. Ultimately, we're setting in motion the
              mindset you'll need throughout your relationships to boost your
              happiness, joy, and even health!
            </p>
            <p className="mb-4">
              "When you learn to connect with or connect better with those
              around you whom you already know, you can learn to connect with
              other people you meet in your life."
            </p>
            <p className="mb-4">
              This book will cover the ins and outs of what it takes to develop
              that connection with someone in different circumstances—even if
              you're a shy, awkward introvert.
            </p>
            <p className="mb-4">
              In the end, what we crave and what is most important for all of us
              is what I mentioned earlier: human connection.
            </p>
            <p className="mb-4">
              Instead of allowing the idea of being an introvert, shy, or
              awkward to hold us back, we're taking advantage of it in our own
              unique way by connecting on a smaller, more manageable scale.
            </p>
            <p className="mb-4">
              Shy, awkward people are often overwhelmed by a mix of
              insecurities, expectations, and worries when trying to connect. If
              a connection doesn't pan out as intended, they'll view themselves
              as failures and stop trying.
            </p>
            <p className="mb-4">
              This book will help you not only learn but actively develop these
              relationships—starting with your why, forming the right mindset,
              and then taking action. Your true learning experience comes from
              slowly taking small steps toward emerging from the bubble you've
              created.
            </p>
            <p className="mb-4">
              So, what are you waiting for? Scroll up, find your peace with who
              you are, and start your journey to connect and take charge of your
              life!
            </p>
          </DialogDescription>
          <DialogFooter className="lg:justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="bg-white text-black cursor-pointer hover:bg-yellow-500"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    <div className="text-center pr-[10rem]">
      <img className="max-w-[430px]" src={bookCover} alt="SFSU logo" />
    </div>
  </div>
);
