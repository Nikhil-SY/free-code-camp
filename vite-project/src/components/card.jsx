
import myImage from "../assets/img1.jpg";
export default function Card() {
  return (
    <div className="m-10">
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={myImage}
          alt="Not available right now"
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg text-white">
              React and JavaScript Developer with expertise in building dynamic
              web applications. Experienced in AWS, ensuring scalable and secure
              deployments
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Nikhil S Y, Bengaluru
            </div>
            <div className="text-sky-500 dark:text-sky-400">
              React Developer | AWS
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
