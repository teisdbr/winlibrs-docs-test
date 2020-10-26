---
title: LIBRS Documentation Home Page
layout: default
permalink: /
---

# LIBRS Validation and Processing Documentation
____

### We've recently revamped the entire documentation. If your RMS contains its own Error Validation, then it's probable that the Error Codes and on which Segments/Data Elements the Errors get thrown have changed. 
____

#### This page contains information on how LIBRS Flat Files should be processed and generated for use in submitting data to the State of Louisiana, and subsequently the FBI via NIBRS. Use the links below, or the side menu to get started. This site contains the following information.

___

- ### <a href="./faq">Frequently Asked Questions</a>
  - #### Questions we've gotten from Vendors and Users about LIBRS that might be helpful to others. A great place to get started learning about LIBRS!

- ### <a href="./librs-spec">Technical Specification Documentation</a>
  - #### Information about the specifications of each of the LIBRS Segments, how they're constructed, error messages associated with them, examples, and other requirements.
  - #### In depth information about each of the LIBRS Data Elements, as well as error messages, examples, and other requirements that are associated with them.
  
- ### <a href="./data-element-values">Data Element Available Values</a>
  - #### Table of all of the available values that can be entered for each LIBRS Data Element.
  
- ### <a href="./lrs-master-list">Master LIBRS LRS List</a>
  - #### The master list of all Louisiana Revisec Statute (LRS) Codes that the LIBRS Program currently accepts, as well as information about expired LRS Codes. 
  - #### Links are available for vendors and agencies to download a JSON list of the current Master LIBRS LRS List for ingestion into their RMS.
  

___

## Recent Changes
___

#### 2020-10-23
* A helpful DBA alerted us that that we had some LRS Codes that, while their Descriptions exist in the law, the LRS Code didn't actuall exist. We've expired those bad codes and added new ones to replace them (Thanks for the tip!). They've retained the same details like their Descriptions and NIBRS Mappings, just updated the LRS to be the correct one:

    | Old Code | New Code |
    |:--------:|:--------:|
    | 15:11.30 | 14:71.3  |
    | 15:13.80 | 14:73.8  |
    | 15:29.60 | 14:89.6  |
    | 15:31.30 | 14:91.3  |
    | 15:31.40 | 14:91.4  |
    | 15:38.3  | 14:98.2  |
    | 15:38.30 | 14:98.8  |

     

#### 2020-10-22

* Fixed a bug where DE L45 - Arrest Connection to Offense was only being checked for an Offense Sequence Number between 001 and 999. 
  * DE L45 should be 15 characters long, and combine a valid Offense Sequence Number and Incident Number together. 
    * EG: If an Offender is Arrested for Offense Sequence Number 001 from Incident Number 20-000001-01, the DE L45 should be '00120-000001-01'.
  * This is important because an Arrest should be reported with a Multiple Arrestee Indicator of 'M' for Multiple when that arrest clears another Incident by arrest, as well. In order words, the arrest that you have listed in an Incident's Segment 62 might not be related to one of the Offenses in that Incident; it could be from another Incident. 
  * Added Error 90043 - 'DE L45 IS REQUIRED AND SHOULD BE A 15 CHARACTER STRING THAT COMBINES A VALID OFFENSE SEQUENCE NUMBER AND INCIDENT NUMBER' to support this fix.

#### 2020-10-16

* Boatload of changes and enhancements to the Documentation:
  -	Went through all of the Errors in LIBRS and determined if they were getting hit or not. 
  -	Went through the Documentation, removing errors that don’t trigger and adding missing ones that do. 
  -	Refined all context for Errors for Segments, Data Elements, and Mandatories.
  -	For each active error, verified the logic that causes it to be thrown, and where an error appears multiple times in the code verified that similar logical conditions caused it to throw.
  -	Consolidated Error Codes where possible to eliminate things like having 12 errors that all say "Can’t be Blank – Mandatory Data Element".
  -	Created a few new Error Codes in places where existing ones didn't cut it:
  -	Update Error Messages to get rid of Misspellings, bad formatting, and out of date information (EG: 'WHEN LRS = 240' now will say something like 'WHEN NIBRS = 240') both in LIBRS and the Documentation.
  -	Consolidated the Segment, Data Element, and NIBRS Mandatory Documentation into a single page so you can find errors with a single CTRL + F. 
  -	Added a list of the available Property Loss Types by Attempted/Completed and NIBRS Code to the Available Data Elements Page. 
  -	Added descriptions and context to each Data Element, giving information about whether it’s required or not, when it should be left blank, how it should be formatted, etc… 
  -	Added logic to stop processing an Offense if the LIBRS to NIBRS Mapping doesn't exist. 
    -	Requirements are heavily NIBRS Code dependent, so it doesn't make sense to process Incidents that don't have a valid mapping.
  -	Add Documentation for Inchoates

#### 2020-09-28
* Logic that would throw Errors 90008 and 90010 has been deprecated. These errors will not be thrown again. Any logic in your RMS that throws these errors should be removed. 
* Change Errors 90011 and 90013 to Warnings, rather than Errors. If your RMS contains logic to prevent the submission of incidents based on these errors, please update it to reflect them as warnings, instead. 

#### 2020-09-03
* Changed up the error message for 22100 because it was wrong. It now reads that for Juvenile Offenses the offender age must be between (and including) 1 and 17.
* Added more context for Error 14060.
* Added missing validations for a number of 90Z Crimes Against Persons. 

#### 2020-08-20
* Made a number of improvements to LIBRS Processing in General. 
   * Cleared up confusing wording and placements on the Error Summary.
   * Went through and removed over 6000 lines of code for more optimal processing of files. 
   * **FIXED THE 23H/240 BUG!!**
     * We have reprocessed everyone in the "Prod" Environment that experienced this error, and will follow up with Certified Agencies soon. 

#### 2020-07-28

* Added "How to Solve Errors in Flat Files" and "What's Wrong with my Flat File" to the <a href="./faq">FAQ</a>.

#### 2020-07-21

* Added an <a href="./faq">FAQ</a> to this site. We're going to start posting the questions and responses that we get from Vendors and users to start building that up for everyone's reference.

#### 2020-07-16

* Made changes to Logic to throw errors rather than Warnings when a NIBRS Code is not supplied by the Agency:
  * Error 90034: MUST PROVIDE A NIBRS CODE
  * This mistake is no longer treated as a Warning, it will cause the Incident to fail validation. 

#### 2020-07-15

* Fixed bug that was causing 90A and 90Z Offenses to fail on the following conditions:
   * DE 7 = Completed, DE 14 = 1
   * DE 7 = Completed, DE 14 = 8

#### 2020-07-09 (Note: Master LRS List has been updated)
* Added Error 12020 to try and help eliminate confusion surrounding Error 12019.
   * Error 12020 states "DATA ELEMENT 12 MUST BE ENTERED FOR ASSAULT, HOMICIDE (EXCEPT 09C), KIDNAPPING/ABDUCTION, ROBBERY, AND FORCIBLE SEX OFFENSES"
* Added LRS 14:52 - Simple Arson (Was already present, but required a modifier to be used). 
* Fix logic that was causing Error 14060 to be thrown for all 11-Series offenses, rather than just 11A and 36B.

#### 2020-06-16 (Note: Master LRS List has been updated)
* Added validations to the LRS Codes that were listed as remapped from 90Z to 720 on 04/14/2020. That's my bad, sorry, forgot that part. 

#### 2020-06-08
* Removed the section for "Other Bias" for Data Element 8A; that section listed Legacy values that are no longer used and were being translated into other NIBRS values. 

#### 2020-06-01
* Updated Requirements 2 and 3 for Data Element 16 based on revised NIBRS Requirements. 
  * Old Requirements:
  

![Previous Data Element 16 Requirements](https://storage.googleapis.com/te-public-files/librs/Old%20DE%2016.png)

  * New Requirements:

![New Data Element 16 Requirements](https://storage.googleapis.com/te-public-files/librs/New%20DE%2016-2.png)

#### 2020-04-27
* Fixed missing validations for the following LRS Codes (All of them are 35A NIBRS):
  * 32:681
  * 40:1041
  * 40:1238.2
  * 40:963
  * 40:964
  * 40:964.1
  * 40:983
  * 40:983.1
  * 40:989.1

#### 2020-04-24
* **New Data Element**: Added in support for Data Element 39A - Ethnicity of Offender. 
  * Included at character 43 on the Offender Segment (40)
  * LIBRS has always been processing this value, but it was not stored in the database. 
  * This is not a mandatory data element to include. 
    * Acceptable values are 'U' for Unkonwn, 'N' for Non-Hispanic, or 'H' for Hispanic, just the same as the other Ethnicities used in LIBRS. 
    * Since it's not a required value a blank space (" ") is also acceptable. In that case we will not store a value in the database (It will not be saved as 'U' for Unknown).
* Changed validations for Data Element 35 (Victim/Offender Relationship):
  * Expired "HR - Homosexual Relationship"; FBI has not accepted this for NIBRS since 2017.
  * Added "XR - Ex Relationship" as a valid value. 
  * Relationship "XB - Ex Boyfriend/Girlfriend" now maps to "XR - Ex Relationship".
  * Prohibitions on use of same-sex couples in relationships have been removed (EG: Marriage can be two men or women). 
* NIBRS 35A now allows for ANY Property Description for Data Element 15 to be used. The only exception is for 11 (Drugs/Equiment) UNLESS Data Element 14 (Property Loss Types) is Seized (7).
* NIBRS 35B now allows for ANY Property Description for Data Element 15 to be used EXCEPT for 10 (Drugs/Narcotics).
* Logic that will trip Error 14060 was implemented so it only can be thrown for NIBRS 11A Offenses. 
* LRS 14:71 now ONLY allows Data Element 14 (Property Loss Type) to be "1 - None", or "8 - Unknown". 

#### 2020-04-14

##### LRS Updates (Note: Master LRS List has been updated)
* Unexpired the Following LRS Codes:
  * 14:89.A1 - Crime Against Nature - Unnatural Carnal Copulation by a Human Being with Another Human Being or Animal
  * 14:102.1 - Cruelty to Animals
  * 14:102.4 - Confined Animals; Necessary Food and Water
  * 14:102.5 - Dogfighting
  * 14:102.8 - Injuring or Killing of a Police Animal
* Remapped the Following Animal Cruelty LRS Codes from 90Z to 720:
  * 14:89.A1
  * 14:102.13
  * 14:102.14
  * 14:102.15
  * 14:102.16
  * 14:102.17
  * 14:102.18

##### Processing Updates:

These bugs in the processing of the LIBRS Flat Files did not cause any LIBRS Validation issues, but rather created errors when performing the NIBRS Submission of the incidents. Only about 80 Incidents in total were affected by these.

* Fixed ingestion issue where Data Element 10 (Number of Premesis Entered) was being duplicated across other Offenses submitted in the same incident.
* Fixed NIBRS Extraction issue where Offenses that were using an Alternative NIBRS Mapping were being sent as the Default NIBRS Code.

##### Validation Updates:

* Fixed multiple validations for Data Element 13 (Type of Weapon or Force Involved):
  * The following Offenses *disallow* Data Element 13 (Type of Weapon or Force Involved) from being submitted with them
    * 220, 240, 250, 270, 280, 290
    * 13C
    * 23B, 23C, 23F, 23H
    * 26A, 26B, 26C, 26E
    * 35A, 35B
    * 370
    * 40A
  * For Offenses of NIBRS 13B, Data Element 13 (Type of Weapon or Force Involved) is ***required and restricted to the following values***:
    * 40, 90, 95, 99
  * HOWEVER, when a NIBRS 13B Offense is passed with Data Element 13 (Type of Weapon or Force Involved) as one of the following values, an error will be thrown telling the user to submit the offense as a 13A rather than a 13B:
    * 11, 12, 13, 14, 15
* Fixed validations to ensure Offenses with the following NIBRS Codes require Data Element 14 (Type of Property Loss) to be 1 or 8:
  * 250, 290
  * 26B
  * 35A, 35B
* Fixed validations to ensure Data Element 14 (Type of Property Loss) is being included with Offenses of NIBRS 120 and 220. 
* Fixed validations to ensure Offenses with the following NIBRS Codes ***disallow*** "S" for Data Element 24 (Victim Type):
  * 200, 220, 250, 280, 290
  * 23D, 23E, 23F, 23H
  * 26A
* Fixed validations to ensure Data Element 33 (Injury Type) is being included with Offenses of the following NIBRS Codes:
  * 100, 120
  * 11A, 11B, 11C, 11D
  * 13A, 13B - Note 13B is limited to "M" and "N"
  * 210
  * 90Z (Only when the Offense is a "Crime Against Person")

#### 2020-03-25
* Added Logic to handle Error Code 14060.
* Resolved issue where Error Code 90039 was being thrown for all Crime Against Property Offenses. 
* Restricted 90A Offenses to only allow a Property Loss Type of "None" or "Unknown". 

#### 2020-03-12
* Fixed Misspelling in LRS 14:42.1/V Description.
* Remapped LRS 14:42.A4 as an 11A Offense as opposed to a 36B Offense. 
* Added 13A Alternate NIBRS Mapping for LRS 14:30.
* Added 13B Alternate NIBRS Mapping for LRS 14:34.5.
* Improved Logic that was causing Errors 14054 and 22120 to be tripped when they shouldn't have. 

#### 2020-02-28
* Found multiple Mandatories that were throwing an Error Code 10077 when they should have been throwing particular Error Codes based on the Mandatory. The Mandatories were: 1, 5, 6, 9, 17, and 20. Changes to LIBRS and Validator were deployed; no changes to documentation were required. 
* Validation update for LRS 14:56.4 to resolve Error 13019. 

#### 2020-02-21
* Changelog started. Please Contact the LIBRS Administrator if you would like to be notified of changes to the LIBRS Spec and Documentation on a weekly basis. 

___

<br>

#### More information about the LIBRS Program and its requirements can be found at <a href="http://www.crimeinla.org">http://www.crimeinla.org</a>
