/* @file HelloKeypad.pde
|| @version 1.0
|| @author Alexander Brevig
|| @contact alexanderbrevig@gmail.com
||
|| @description
|| | Demonstrates the simplest use of the matrix Keypad library.
|| #
*/
#include <Keypad.h>

const byte ROWS = 4; //four rows
const byte COLS = 4; //three columns

char keys[ROWS][COLS] = {

  {'1','2','3','A'},

  {'4','5','6','B'},

  {'7','8','9','C'},

  {'*','0','#','D'}

};

//byte rowPins[ROWS]  = { 0, 8, 2, 3 };// Connect keypad ROW0, ROW1, ROW2 and ROW3 to these Arduino pins.
//byte colPins[COLS] = { 4, 5, 6, 7 }; // Connect keypad COL0, COL1 and COL2 to these Arduino  pins.
//byte rowPins[ROWS]  = { 2, 3, 4, 5 };// Connect keypad ROW0, ROW1, ROW2 and ROW3 to these Arduino pins.
//byte colPins[COLS] = { 6, 7, 8, 9 }; // Connect keypad COL0, COL1 and COL2 to these Arduino  pins.

byte rowPins[ROWS]  = { 9, 8, 7, 6 };// Connect keypad ROW0, ROW1, ROW2 and ROW3 to these Arduino pins.
byte colPins[COLS] = { 5, 4, 3, 2 }; // Connect keypad COL0, COL1 and COL2 to these Arduino  pins.

Keypad keypad = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );


void setup(){
  Serial.begin(9600);
}
  
void loop(){
  char key = keypad.getKey();
  
  if (key){
    Serial.println(key);
    
  }

//  for (int x = 0; x < 4; x++){
//      for (int y = 0; y < 4; y++){
//           int a = digitalRead(x);
//           int b = digitalRead(y+4);
//           Serial.print(a);
//           Serial.print(":");
//           Serial.print(b);
//           Serial.print(" ");
//      }  
//      Serial.println();
//      delay(100);
//    }
}
