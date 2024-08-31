function MainButton() {
  return (
    <div className="relative self-center after:content-[''] after:absolute after:w-[2px] after:h-10 after:bg-gray-700 after:left-1/2 after:-translate-x-1/2 after:top-2/3">
      <button className="bg-[#e84bcc] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#e03ccf] to-[#1790ece6] relative hover:scale-110 ease-in-out duration-100 group  mb-24">
        Latest Works
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 100 100"
          className="absolute rotate-90 left-1/2 -translate-x-1/2 top-10 group-hover:top-11 ease-in-out duration-100"
        >
          <g transform="translate(0,-952.36218)">
            <path
              d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
              fill="#fff"
              fillOpacity="1"
              stroke="white"
              strokeWidth="4"
              visibility="visible"
              display="inline"
              overflow="visible"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default MainButton;
