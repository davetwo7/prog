"use client";
import React from "react";
import { KeyType } from "./KeyInformation";

interface CircleOfFifthsProps {
  setSelectedKey: React.Dispatch<React.SetStateAction<KeyType>>;
}

const CircleOfFifths = ({ setSelectedKey }: CircleOfFifthsProps) => {
  const isValidKey = (key: string): key is KeyType => {
    return [
      "C",
      "G",
      "D",
      "A",
      "E",
      "B",
      "F#",
      "Db",
      "Ab",
      "Eb",
      "Bb",
      "F",
    ].includes(key);
  };

  const handleKeyClick = (e: React.MouseEvent<SVGPathElement>) => {
    let keyId = e.currentTarget.id;
    if (isValidKey(keyId)) {
      setSelectedKey(keyId);
    } else {
      console.error("Invalid key:", keyId);
    }
  };

  const handleTextClick = (e: React.MouseEvent<SVGTextElement>) => {
    let keyId = e.currentTarget.textContent;
    if (keyId && isValidKey(keyId)) {
      setSelectedKey(keyId);
    } else {
      console.error("Invalid key:", keyId);
    }
  };
  return (
    <svg
      xmlnsXlink="http://www.w3.org/2000/svg"
      width={"100%"}
      height={"100%"}
      version="1.1"
      viewBox="57 18 400 400"
    >
      <g transform="translate(56.631 12.585)">
        <g
          fill="#411d27"
          stroke="#572a39"
          stroke-miterlimit="0"
          stroke-width="2"
        >
          <path
            onClick={handleKeyClick}
            id="G"
            transform="translate(10.11 -9.4359)"
            d="m265.83 124.12c-13.324-12.222-29.443-21.709-47.727-27.33-2.095-0.64409-4.271 0.60953-4.8383 2.7267l-9.6798 36.126c-0.5673 2.1172 0.68921 4.2978 2.7716 4.9814 10.373 3.4052 19.653 8.7106 27.554 15.423 1.6703 1.419 4.2179 1.3851 5.7678-0.16477 9.7739-9.7739 17.216-17.216 26.227-26.227 1.5499-1.5499 1.5397-4.0532-0.0755-5.5348z"
            color="#000000"
            style={{ mixBlendMode: "normal" }}
          />
          <path
            onClick={handleKeyClick}
            id="D"
            transform="translate(10.11 -9.4359)"
            d="m301.31 180.25c-5.4959-17.728-14.776-34.049-27.157-47.754-1.4692-1.6265-3.9627-1.6463-5.5126-0.0964-9.0011 9.0011-16.433 16.433-26.194 26.194-1.5499 1.5499-1.5599 4.0745-0.10951 5.7176 7.078 8.0182 12.548 17.347 16.085 27.435 0.72527 2.0682 2.9392 3.3154 5.0564 2.7481 13.059-3.4993 23.017-6.1675 35.114-9.4088 2.1172-0.5673 3.3662-2.742 2.7172-4.8355z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="A"
            transform="translate(10.11 -9.4359)"
            d="m303.9 246.37c4.1634-18.569 4.0916-37.155 0.38593-54.69-0.45317-2.1444-2.5971-3.4097-4.7143-2.8424-12.086 3.2384-22.033 5.9037-35.076 9.3983-2.1172 0.56729-3.3974 2.751-2.9756 4.9017 2.0148 10.272 2.0852 21.062-0.0697 31.86-0.42891 2.1493 0.84762 4.332 2.9648 4.8993l34.725 9.3045c2.1172 0.5673 4.2805-0.69304 4.76-2.8317z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="E"
            transform="translate(10.11 -9.4359)"
            d="m273.51 305.03c12.04-13.23 21.482-29.186 27.276-47.253 0.66939-2.0871-0.56148-4.2568-2.6787-4.824l-34.726-9.3048c-2.1172-0.5673-4.3336 0.67911-5.061 2.7466-3.6362 10.336-9.173 19.545-16.111 27.336-1.4575 1.6368-1.4534 4.1555 0.0965 5.7054 9.5699 9.5698 16.831 16.831 25.681 25.681 1.5499 1.5499 4.0475 1.5341 5.5227-0.0869z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="B"
            transform="translate(10.11 -9.4359)"
            d="m217.93 340.75c17.489-5.576 33.637-14.913 47.253-27.346 1.6186-1.4779 1.6323-3.9776 0.0824-5.5275-8.8667-8.8667-16.142-16.142-25.737-25.737-1.5499-1.5499-4.1031-1.5898-5.7795-0.17794-8.0834 6.8077-17.416 12.021-27.464 15.332-2.0816 0.68585-3.3379 2.8673-2.7706 4.9845 3.5864 13.385 6.2922 23.483 9.5883 35.784 0.56732 2.1172 1.0272 3.8335 1.0272 3.8335z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="F#"
            transform="translate(10.11 -9.4359)"
            d="m151.99 343.51c18.48 4.2366 37.018 4.1257 54.531 0.30476 2.1414-0.46722 3.4036-2.6235 2.8364-4.7407-3.3014-12.322-6.012-22.438-9.6058-35.851-0.56728-2.1172-2.759-3.4303-4.9172-3.049-10.057 1.777-20.58 1.7037-31.101-0.49813-2.1452-0.44896-4.3237 0.81124-4.891 2.9284l-9.6797 36.125c-0.5673 2.1172 0.69036 4.2908 2.8267 4.7806z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="Db"
            transform="translate(10.11 -9.4359)"
            d="m94.055 312.6c12.978 12.236 28.702 21.832 46.561 27.718 2.0816 0.68608 4.248-0.5332 4.8153-2.6504l9.6797-36.125c0.5673-2.1172-0.67431-4.3498-2.7347-5.097-9.9709-3.616-18.874-9.0103-26.447-15.723-1.64-1.4538-4.1616-1.4469-5.7115 0.10303-9.8561 9.8562-17.189 17.189-26.201 26.201-1.5499 1.5499-1.5569 4.0705 0.03783 5.5741z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="Ab"
            transform="translate(10.11 -9.4359)"
            d="m59.705 257.22c5.3082 17.338 14.226 33.347 26.129 46.893 1.4467 1.6465 3.9226 1.6832 5.4724 0.13326 9.0107-9.0109 16.34-16.341 26.199-26.2 1.5499-1.5499 1.5868-4.1004 0.17081-5.7732-6.6287-7.8309-11.765-16.839-15.111-26.542-0.71447-2.0719-2.9191-3.3218-5.0363-2.7545-13.21 3.5397-22.99 6.1604-35.093 9.4033-2.1172 0.56729-3.3722 2.7436-2.7306 4.8394z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="Eb"
            transform="translate(10.11 -9.4359)"
            d="m57.043 192.46c-3.9216 18.104-3.8395 36.207-0.28738 53.319 0.44548 2.146 2.5834 3.4128 4.7006 2.8455 12.098-3.2416 21.872-5.8606 35.074-9.398 2.1172-0.56729 3.4068-2.7533 2.997-4.9064-1.8732-9.8422-1.9569-20.153-0.01741-30.485 0.40437-2.154-0.89198-4.3417-3.0092-4.909l-34.726-9.3048c-2.1172-0.5673-4.268 0.69625-4.732 2.8384z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="Bb"
            transform="translate(10.11 -9.4359)"
            d="m86.203 134.42c-11.57 13.144-20.609 28.881-26.153 46.615-0.6539 2.092 0.58942 4.2651 2.7066 4.8324l34.725 9.3045c2.1172 0.5673 4.314-0.68473 5.0173-2.7605 3.39-10.006 8.5512-18.98 15.042-26.658 1.4149-1.6737 1.3782-4.2241-0.17175-5.774-9.6511-9.651-16.832-16.832-25.692-25.691-1.5499-1.5499-4.0264-1.5138-5.4746 0.13138z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="F"
            transform="translate(10.11 -9.4359)"
            d="m140.66 97.99c-17.165 5.8811-32.949 15.426-46.223 27.957-1.5938 1.5045-1.587 4.0249-0.03715 5.5748 8.8572 8.8574 16.038 16.038 25.686 25.686 1.5499 1.5499 4.0716 1.557 5.7116 0.10312 7.7699-6.8883 16.78-12.257 26.522-15.821 2.0583-0.75292 3.2985-2.99 2.7312-5.1072-3.5951-13.417-6.2922-23.482-9.5891-35.786-0.56729-2.1172-2.7278-3.3169-4.8013-2.6065z"
            color="#000000"
          />
          <path
            onClick={handleKeyClick}
            id="C"
            transform="translate(10.11 -9.4359)"
            d="m207.94 94.144c-19.46-4.2634-38.954-3.728-57.226 0.87392-1.417 0.35688-2.2521 1.8174-1.8739 3.2289 3.5601 13.287 6.3817 23.818 10.274 38.344 0.3782 1.4115 1.8304 2.2527 3.2555 1.9301 13.484-3.0529 25.355-2.167 33.825-0.53466 1.4348 0.27649 2.8959-0.60095 3.2741-2.0124l10.364-38.681c0.37819-1.4115-0.4663-2.8361-1.8937-3.1488z"
            color="#000000"
          />
        </g>
        <g
          fill="#cc4c70"
          font-family="Satoshi"
          font-size="74.667px"
          font-weight="bold"
          stroke="#000000"
          stroke-width="0"
        >
          <text
            className="cursor-pointer"
            id="Ctext"
            onClick={handleTextClick}
            transform="matrix(.26458 0 0 .26458 159.28 -255.11)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              C
            </tspan>
          </text>

          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Gtext"
            transform="matrix(.26458 0 0 .26458 211.74 -243.16)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              G
            </tspan>
          </text>

          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Dtext"
            transform="matrix(.26458 0 0 .26458 250.53 -203.75)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              D
            </tspan>
          </text>

          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Atext"
            transform="matrix(.26458 0 0 .26458 264.51 -150.72)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              A
            </tspan>
          </text>

          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Etext"
            transform="matrix(.26458 0 0 .26458 250.41 -99.472)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              E
            </tspan>
          </text>

          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Btext"
            transform="matrix(.26458 0 0 .26458 212.39 -58.996)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              B
            </tspan>
          </text>

          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Fsharptext"
            transform="matrix(.26458 0 0 .26458 153.59 -46.197)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              F#
            </tspan>
          </text>

          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Dbtext"
            transform="matrix(.26458 0 0 .26458 99.527 -61.898)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              Db
            </tspan>
          </text>
          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Abtext"
            transform="matrix(.26458 0 0 .26458 64.608 -100.85)"
            // style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;shape-inside:url(#rect44);white-space:pre"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              Ab
            </tspan>
          </text>
          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Ebtext"
            transform="matrix(.26458 0 0 .26458 51.209 -151.38)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              Eb
            </tspan>
          </text>
          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Bbtext"
            transform="matrix(.26458 0 0 .26458 62.792 -202.57)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              Bb
            </tspan>
          </text>
          <text
            className="cursor-pointer"
            onClick={handleTextClick}
            id="Ftext"
            transform="matrix(.26458 0 0 .26458 108.66 -241.41)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1390.1328">
              F
            </tspan>
          </text>
        </g>
        <g
          fill="#411d27"
          stroke="#572a39"
          stroke-miterlimit="0"
          stroke-width="2"
        >
          <path
            id="leadingtone"
            transform="translate(10.11 -9.4359)"
            d="m268.88 315.23c-14.623 13.653-32.174 23.801-51.218 29.638-1.3971 0.42822-2.2308 1.8939-1.8526 3.3054 3.3731 12.588 7.3889 27.575 9.7661 36.446 0.3782 1.4115 1.8247 2.2332 3.2239 1.812 26.307-7.9198 50.538-21.91 70.55-40.733 1.0644-1.0011 1.076-2.6647 0.0427-3.698-6.5017-6.5017-17.474-17.474-26.726-26.726-1.0333-1.0333-2.7185-1.0432-3.7866-0.0459z"
            color="#000000"
          />
          <path
            id="mediant"
            transform="translate(10.11 -9.4359)"
            d="m304.93 257.52c-6.0791 19.704-16.363 37.025-29.587 51.216-0.99617 1.069-0.98543 2.7551 0.0478 3.7883 9.2623 9.2623 20.24 20.241 26.746 26.746 1.0333 1.0333 2.7047 1.0293 3.7156-0.0258 18.601-19.416 32.937-43.292 41.001-70.49 0.41537-1.401-0.41147-2.8489-1.8229-3.2271l-36.79-9.8578c-1.4115-0.3782-2.8801 0.45463-3.3109 1.8509z"
            color="#000000"
          />
          <path
            id="subdominant"
            transform="translate(10.11 -9.4359)"
            d="m91.703 123.22c13.757-13.001 30.137-22.895 47.951-28.964 2.0747-0.70681 3.3158-2.9386 2.7485-5.0558-3.1867-11.893-6.8603-25.604-9.2122-34.381-0.56729-2.1172-2.7376-3.3513-4.8316-2.7038-25.398 7.8536-48.819 21.375-68.319 39.443-1.6078 1.4897-1.6242 3.9863-0.07431 5.5362 6.6285 6.6285 17.033 17.033 26.088 26.088 1.5499 1.5499 4.0565 1.543 5.6495 0.0376z"
            color="#000000"
          />
          <path
            id="submediant"
            transform="translate(10.11 -9.4359)"
            d="m308.02 190.68c3.8784 18.178 3.9674 37.452-0.36942 56.695-0.48187 2.1382 0.7871 4.3182 2.9043 4.8855l34.211 9.1668c2.1172 0.5673 4.2788-0.69326 4.7737-2.8285 6.191-26.713 5.7524-53.638-0.25575-78.973-0.50576-2.1327-2.6756-3.3911-4.7928-2.8238-8.5792 2.2988-21.91 5.8707-33.524 8.9824-2.1172 0.56729-3.4044 2.752-2.9471 4.8955z"
            color="#000000"
          />
          <path
            id="supertonic"
            transform="translate(10.11 -9.4359)"
            d="m276.88 129.77c12.85 14.191 22.475 31.109 28.154 49.486 0.64721 2.0941 2.8311 3.3489 4.9483 2.7816 11.602-3.1087 24.923-6.678 33.496-8.9753 2.1172-0.5673 3.3513-2.7376 2.7037-4.8316-7.8538-25.398-21.375-48.818-39.444-68.318-1.4897-1.6078-3.9863-1.6242-5.5362-0.07431-6.2128 6.2128-15.855 15.855-24.225 24.225-1.5499 1.5499-1.5692 4.0824-0.098 5.7071z"
            color="#000000"
          />
          <path
            id="dominant"
            transform="translate(10.11 -9.4359)"
            d="m219.1 93.035c18.959 5.8072 35.664 15.653 49.456 28.346 1.6128 1.4842 4.1351 1.4754 5.685-0.0745 8.3662-8.3662 18.006-18.006 24.218-24.218 1.5499-1.5499 1.545-4.0582-0.0491-5.5626-18.937-17.871-42.036-31.714-68.265-39.709-2.0966-0.63906-4.2691 0.60269-4.8364 2.7199l-8.9922 33.559c-0.5673 2.1172 0.68891 4.2961 2.7846 4.9381z"
            color="#000000"
          />
          <path
            id="tonic"
            transform="translate(10.11 -9.4359)"
            d="m218.73 48.759c-26.713-6.1912-53.639-5.7524-78.974 0.25562-2.1327 0.50575-3.3911 2.6756-2.8238 4.7928 2.3482 8.7637 6.015 22.448 9.196 34.32 0.5673 2.1172 2.7394 3.3568 4.8698 2.8416 18.133-4.3856 37.4-4.8942 56.653-0.85402 2.1451 0.45014 4.331-0.84234 4.8984-2.9595l9.0092-33.623c0.5673-2.1172-0.69326-4.2789-2.8285-4.7737z"
            color="#000000"
          />
        </g>
        <g
          fill="#cc4c70"
          font-family="Satoshi"
          font-size="96px"
          font-weight="bold"
          stroke="#000000"
          stroke-width="0"
        >
          <text
            transform="matrix(.26458 0 0 .26458 163.11 -310.7)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1410.0367">
              I
            </tspan>
          </text>
          <text
            transform="matrix(.22914 .13229 -.13229 .22914 420.9 -257.18)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1410.0367">
              V
            </tspan>
          </text>
          <text
            transform="matrix(.22914 -.13229 .13229 .22914 -100.48 -222.61)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1410.0367">
              IV
            </tspan>
          </text>
          <text
            transform="matrix(.13229 .22914 -.22914 .13229 625.47 -74.981)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1410.0367">
              ii
            </tspan>
          </text>
          <text
            transform="matrix(0 .26458 -.26458 0 708.71 176.99)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1410.0367">
              vi
            </tspan>
          </text>
          <text
            transform="matrix(-.13229 .22914 -.22914 -.13229 655.92 441.02)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1410.0367">
              iii
            </tspan>
          </text>
          <text
            transform="matrix(-.22914 .13229 -.13229 -.22914 481.73 640.38)"
            xmlSpace="preserve"
          >
            <tspan x="85.40625" y="1410.0367">
              vii°
            </tspan>
          </text>
        </g>
        <g
          fill="#ffffff"
          font-family="Satoshi"
          stroke="#000000"
          stroke-width="0"
        >
          <text
            x="179.40005"
            y="73.699387"
            font-size="8.4667px"
            xmlSpace="preserve"
          >
            <tspan
              x="179.40005"
              y="73.699387"
              fill="#ffffff"
              font-family="Satoshi"
              font-size="8.4667px"
              stroke-width="0"
            >
              tonic
            </tspan>
          </text>
          <text
            transform="rotate(-32.692)"
            x="26.86002"
            y="143.1696"
            font-size="8.4667px"
            xmlSpace="preserve"
          >
            <tspan x="26.86002" y="143.1696">
              subdominant
            </tspan>
          </text>
          <g font-size="8.4667px">
            <text
              transform="rotate(30)"
              x="248.25574"
              y="-49.615841"
              xmlSpace="preserve"
            >
              <tspan x="248.25574" y="-49.615841">
                dominant
              </tspan>
            </text>
            <text
              transform="rotate(59.501)"
              x="256.82983"
              y="-193.96671"
              xmlSpace="preserve"
            >
              <tspan x="256.82983" y="-193.96671">
                supertonic
              </tspan>
            </text>
            <text
              transform="rotate(90)"
              x="185.61484"
              y="-325.44382"
              xmlSpace="preserve"
            >
              <tspan x="185.61484" y="-325.44382">
                submediant
              </tspan>
            </text>
            <text
              transform="rotate(120)"
              x="70.561661"
              y="-404.64557"
              xmlSpace="preserve"
            >
              <tspan x="70.561661" y="-404.64557">
                mediant
              </tspan>
            </text>
            <text
              transform="rotate(149.49)"
              x="-80.010712"
              y="-413.48062"
              xmlSpace="preserve"
            >
              <tspan x="-80.010712" y="-413.48062">
                leading tone
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CircleOfFifths;
