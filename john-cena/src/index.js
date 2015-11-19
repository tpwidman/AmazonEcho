/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 */

/**
 * App ID for the skill
 */
var APP_ID = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var play = require('play').Play();

var AlexaSkill = require('./AlexaSkill');

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var JohnCena = function () {
    AlexaSkill.call(this, APP_ID);
};


// //   var play = require('play').Play();

// //   // play with a callback
// //   play.sound('./wavs/sfx/intro.wav', function(){
// //     // these are all "fire and forget", no callback
// //     play.sound('./wavs/sfx/alarm.wav');
// //     play.sound('./wavs/sfx/crinkle.wav');
// //     play.sound('./wavs/sfx/flush.wav');
// //     play.sound('./wavs/sfx/ding.wav');

// //   });

// //   //If you want to know when the player has defintely started playing
// //   play.on('play', function (valid) {
// //     console.log('I just started playing!');
// //   });
// //   play.sound('./wavs/sfx/ding.wav');

// //   //If you want to know if this can't play for some reason
// //   play.on('error', function () {
// //     console.log('I can't play!');
//   });