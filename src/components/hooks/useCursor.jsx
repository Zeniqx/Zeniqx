// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const useCursor = () => {
//   const cursorRef = useRef(null);


//   useEffect(() => {
//     const cursor = cursorRef.current;
//     let mouseX = 0;
//     let mouseY = 0;

//     gsap.to({}, 0.016, {
//       repeat: -1,
//       onRepeat: () => {
//         gsap.set(cursor, {
//           left: mouseX,
//           top: mouseY,
//         });
//       },
//     });


//     const handleMouseMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };


//     window.addEventListener('mousemove', handleMouseMove);

//     const cursorElements = document.querySelectorAll('.cursor-scale');

//     cursorElements.forEach((element) => {
//       element.addEventListener('mouseover', () => {
//         cursor.classList.add('grow');
//         if (element.classList.contains('small')) {
//           cursor.classList.remove('grow');
//           cursor.classList.add('grow-small');
//         }
//       });

//       element.addEventListener('mouseleave', () => {
//         cursor.classList.remove('grow');
//         cursor.classList.remove('grow-small');
//       });
//     });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       cursorElements.forEach((element) => {
//         element.removeEventListener('mouseover', () => {});
//         element.removeEventListener('mouseleave', () => {});
//       });
//     };
//   }, []);

//   return cursorRef;
// };

// export default useCursor;
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return; // Ensure the cursor element exists before proceeding

    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: () => {
        gsap.set(cursor, {
          left: mouseX,
          top: mouseY,
        });
      },
    });

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const cursorElements = document.querySelectorAll('.cursor-scale');

    cursorElements.forEach((element) => {
      element.addEventListener('mouseover', () => {
        cursor.classList.add('grow');
        if (element.classList.contains('small')) {
          cursor.classList.remove('grow');
          cursor.classList.add('grow-small');
        }
      });

      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cursorElements.forEach((element) => {
        element.removeEventListener('mouseover', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return cursorRef;
};

export default useCursor;
