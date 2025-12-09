---
title: LIBRS Documentation Home Page
layout: default
permalink: /
---
# LIBRS Validation and Processing Documentation

---

## ***Our JSON Validator is now in Beta, and available to all vendors to use!***

Please refer to [https://docs.librs.org/models](https://docs.librs.org/models) and [https://json.librs.org:5000/swagger/index.html](https://json.librs.org:5000/swagger/index.html) for information about how to use them. At this stage in the project, the information that should be supplied with each Data Element should be the same as it is on the Flat File (EG: Drug Measurement Type Dosage Unit should be sent as "DU"). In the future, however, we'll implement a dictionary that will allow for whole word submissions to make things easier to read for everyone (EG: "Dosage Unit" instead of "DU").

***Note: It's been brought to our attention that Swagger will remove the New Line characters from the request, which will cause the FFToJson and ValidateFFToJson requests to fail. The recommended workaround is to use Postman.***

Please don't hesitate to let us know if you have any questions or problems using the API. While it's been tested thoroughly internally we would hate to cause anyone undue frustration, so please reach out as needed.

---

#### This page contains information on how LIBRS Flat Files should be processed and generated for use in submitting data to the State of Louisiana, and subsequently the FBI via NIBRS. Use the links below, or the side menu to get started. This site contains the following information.

---

- ### <a href="./faq">Frequently Asked Questions </a>

  - #### Questions we've gotten from Vendors and Users about LIBRS that might be helpful to others. A great place to get started learning about LIBRS!
- ### <a href="./librs-spec">Technical Specification Documentation </a>

  - #### Information about the specifications of each of the LIBRS Segments, how they're constructed, error messages associated with them, examples, and other requirements.
  - #### In depth information about each of the LIBRS Data Elements, as well as error messages, examples, and other requirements that are associated with them.
- ### <a href="./data-element-values">Data Element Available Values </a>

  - #### Table of all of the available values that can be entered for each LIBRS Data Element.
- ### <a href="./lrs-master-list">Master LIBRS LRS List </a>

  - #### The master list of all Louisiana Revisec Statute (LRS) Codes that the LIBRS Program currently accepts, as well as information about expired LRS Codes.
  - #### Links are available for vendors and agencies to download a JSON list of the current Master LIBRS LRS List for ingestion into their RMS.
- ### <a href="./models">JSON Data Models </a>

  - #### Contains information on the JSON Data Models and how to get them implemented.

---

### Change Log:

#### 2025-12-09

* Removed error code 14060 from Sex of Offender (38) and Sex of Victim (27) due to law changes.
* Removed error code 14060 from error.json since it is no longer used.

#### 2025-05-09

* Added LIBRS warning if Bias Motivation is Unknown. Unknown should only be used when there is a question under investigation about a bias motivation / hate crime.
* Added an Unknown Bias Motivation Report in Agencies Reports generated with each submission.
* Updated the Rejected Incident report in Agencies Reports to include the LIBRS Environment and updated the sorting by incident number.
* Added 2A Cargo Theft Indicator to LIBRS flat file specifications. 2A Cargo Theft Indicator is in the administrative segment and offense segment before the Future Expansion Buffer. This was added to flat file specification in way that will not impact agencies current flat file submissions but will allow compliance by new vendors or vendors willing to adjust their flat file submission format. This was also updated in the Flat file to JSON converter API.
* Added LRS master list and validation management in the LIBRS admin console. The LIBRS administrator will be able to maintain new LRS codes and multiple NIBRS validations in the console and generate a new master LRS list. This tool will automatically update the LIBRS validation engine, docs.librs.org, the stand-alone flat file validator and the Master LRS GIT repository for RMS vendors.

#### 2024-11-05

* Adjusting batch process for filenames with missing extensions, extra symbols in filenames and removed case sensitivity. This issue was a result of accepting both JSON and Flat file in batch process.

#### 2024-10-18

* Added the following LRS codes to Master LRS List: 30:2531, 28:53, 28:53.2, 14:126.1.1, 14:40.8,
* Expired the following LRS codes: 14:67.6, 14:67.7, 14:67.8, and 14:67.9
* Changed LRS descriptions and validations to match LRS codes that were reused by the State and have a different meaning: 14:67.4, 14:67.5, 14:67.13
* Changed LRS description for 14:95.
* Corrected Typo on LRS number for 15:542.1.2.

#### 2024-08-21

* Updated formatting and change log
* Updated JSON Process documentation

#### 2024-08-16

* Changed data type of Offender Age to string, to match Victim and Arrestee segments

#### 2024-07-30

* Updated documenation to reflect Louisiana SB-3. Now, people are automatically considered an adult (by Louisiana law, not federal law) if they are age 17 or older at the time of arrest.

#### 2024-07-03

* Security updates

#### 2024-05-31

* Bug fixes for WINLIBRS
  * Fixed configuration errors
  * Fixed bug that assigned effective date to expiration date when validating LARS codes.
* Bug fixes for standalone XML Validator

#### 2024-05-16

* Added 40C NIBRS Code and accompanying logic
* Fixed bug when NIBRS Code is missing or invalid
* Added validation when both LRS and NIBRS codes are missing or invalid.
* Fixed bug with Arrestee Segments

#### 2024-05-10

* Updated SSL certificates for FBI submissions

#### 2024-05-02

* Bug fix for Animal Cruelty (720 NIBRS code) - incorrect LCRX code value mapping for data element 12 Criminal Activity (I is changed to P and it should not be changed at all)

#### 2024-04-26

* Updated self-signed lcrx.librs.org SSL certificates for the FBI

#### 2024-04-03

* Security updates
* Bug fixes

#### 2023-06-29

* Remove unnecessary code

#### 2023-05-30

* Bug fix for System.OutOfMemoryException
* Updates to provide more accurate error messaging in the Web Validator.

#### 2023-03-10

* Changed Scorecard Report to allow ORI number to have a number or letter for the last character.

#### 2022-10-13

* Update from .NET Framework 4.5.2 to .NET Framework 4.8

#### 2022-04-20

* Improved logic for whether or not the Victim Injury Segment can be ignored.
* Fixed Unknown LRS Code/NIBRS Only Validation automatically marking Incidents as accepted.
* Patched bug that removed Segment 51 when LRS Code wasn't known.

#### 2022-04-18

* Introduced an unexpected bug with the warning Logic from last week that caused Non-Numeric Ages to fail when processing.
* Fixed a bug where Offenses that we didn't know the LRS/NIBRS Pairing were being marked as accepted and skewing counts.
* Reworded a couple of Warnings:
  * 90017: ~~LRS-TO-NIBRS PAIR MUST HAVE A VALID MAPPING~~ UNKNOWN LRS-TO-NIBRS - OFFENSE WILL BE VALIDATED ON NIBRS CODE ONLY
  * 90040: ~~WARNING: OFFENDER AGE, SEX OR RACE MUST BE KNOWN TO HAVE OFFENDER SEQUENCE NUMBER OTHER THAN '000'~~ WARNING: OFFENDER WITH NON '000' SEQUENCE NUMBER WAS ENTERED BUT HAS NO KNOWN ATTRIBUTES - VERIFY THIS WAS INTENTIONAL AND SHOULDN'T BE A '000' UNKNOWN OFFENDER

#### 2022-04-12

* Updated Error 90043:
  * The wording was incorrect. It has to do with DE L45, Offense Connected to Arrest, which is used to define an Offense in another Incident that cleared a Separate Incident with the Multiple Arrestee Indicator (DE 44).
  * DE L45 is entirely optional, even if using a Multiple Arrestee Indicator Value of "M". However if you do give it to us, we require that it comes through in the correct format, is all. The Error Message and Error Description in the spec was updated to reflect this.
* Added Warning 90046:
  * This will get thrown if you use an Age or Birthdate that indicates the Individual is 99 Years of Age or Older. It's just a warning to make sure you didn't make a mistake when entering their details.

#### 2022-04-11

* Added Error 90045:
  * Gets thrown if the Ages don't match for Matching Records with a VO (Victim was Offender) Relationship.
  * EG: If in Segment 40 the Age is 35 while the Age in Segment 50 is 45 and you tell us those are the same person by using the VO Relationship, then you will get this error.
* Made some changes to the Scorecard:
  * If you haven't yet submitted Months then those will be blank
  * If you started submitting data mid-way through the year the months before it will have zeros listed (you can still back-fill data)
  * If you send a Zero Report then you'll see all Zeros, except for in the Percentage Calculation since that's one of those "destory the universe by dividing by zero" situations.

#### 2022-03-14

* We've been scouring over hundreds of thousands of incidents, making corrections to our LIBRS Validation and NIBRS Extraction where required. This has primarily included Type of Criminal Activity Validation, which had a mild oopsie. I made it too restrictive and forgot to include the LIBRS Values that will get translated to "P" in NIBRS.

#### 2022-02-23

* Added Error 10079, which gets thrown if you include recovered vehicle properties that are only associated with a NIBRS 280 Offense in DE 19 - Number of Recovered Vehicles. Those vehicles should not be included in that count according to NIBRS.
* Added a handful of LRS Codes: 14:89.1 - 36A, 14:542.1.2 - 90Z, 14:1752 - 520, 14:95 - 90Z
* Pushed all LRS Codes that had an Effective Date in 2021 (Except for 720's) up to 2020 to get rid of bad LRS Code Errors for people trying to make fixes before the FBI Deadline.

#### 2022-02-01

* Began the 2020 and 2021 data reprocessing.

#### 2021-10-11

* Relaxed the requirement for Group A Offenses to have a matching NIBRS/LRS Pair
  * You will now only get a warning instead of an Error if you give us a Group A Offense that we don't have a matching NIBRS Code for.
  * Group B's will still get an error, and anything that we have an Expired NIBRS Mapping for will also get an error (because we know that Mapping is not valid).
* Caused a bug with 14:79 Crime Against Person vs Society. We rolled that back so that Crime Against Person is has now been valid the entire year. We apologize for all of the confusion this has caused.
* Fixed an erroneous Error 84212 getting thrown on NIBRS 100's.
* Broke, then fixed emails coming from LIBRS.
* Fixed a bug that disallowed 520's from having a Seized Property associated with them.
* Changed it so that if any Juveniles are present in an Incident, then it's OK to have Juvenile-only Offenses.
  * We were running into cases where since things like JU:RUN are a Crime Against Society, and so are things like Contributing to the Deliquency of a Minor, LIBRS was thinking that Adults should be associated with JU:RUN because both Offenders link to the same Victim.

#### 2021-06-22

* Added Error 13050, which is thrown when you supply values for Number of Stolen or Number of Recovered Vehicles, and there are no Offenses that meet the required criteria to supply them.
  * In order to supply Number of Stolen Vehicles, there must be at least one ***Completed 240*** (MV Theft) Offense, and is associated with a Property Description Segment (Segment 31 linked via Segment 33) that contains a Property Description of a ***Vechicle***, and a Loss Type of ***7 - Stolen***.
  * In order to supply Number of Recovered Vehicles, you must meet the above criteria for the Number of Stolen Vehicles and include a value for it, as well as include a ***Completed 280*** (Possession of Stolen Property) Offense which relates to a Property Description Segment (Segment 31 linked via Segment 33) with the same information as the Stolen Property in the above case, but with a Loss Type of ***5 - Recovered***.

#### 2021-03-09

* We have redesignated some LRS Codes in order to keep them in line with changes to the Statute Documentation on LA Legis. Effectively we've had a shift in some of the modifiers that are used. Here's a table that shows the old and new LRS Codes:

  |-Old LRS Code-|-New LRS Code-|-------Status------|
  |   14:34.9L2  |   14:34.9M1  | Active 2021-03-09 |
  |   14:34.9L1  |   14:34.9M2  | Active 2021-03-09 |
  |   14:34.9K   |   14:34.9L   | Active 2021-03-09 |
  |   14:34.9J   |   14:34.9K   | Active 2021-03-09 |
* Please Note that this means 14:34.9J is no longer reportable as it was changed to 14:34.9K, and instead should be reported as 14:34.9.

#### 2021-02-24

* Minor change to the wording on Suspected Drug Type in the documentation and FAQ.
  * The existing wording made it sound as though you should enter in multiple Suspected Drug Types on the same Segment 31, and that they could not repeat across different Segment 31's. That's flatly not the case.
    * You can report as many of the same Suspected Drug Type Properties as you see fit. For instance, 1lb of Prepared Marijuana with 10 Plants of Marijuana on two different Segment 31's, or if two persons are found in possession of their own stash of Cocaine, both containers can be reported as separate Semgent 31's.

#### 2021-02-12

* Made the following changes to the Master LRS List:|  Action  | Statute Number | Description                                                                                               | Available NIBRS Codes |
  | :-------: | :------------: | :-------------------------------------------------------------------------------------------------------- | :-------------------: |
  |   Added   |    14:95.10    | Possession of a Firearm or Carrying of a Concealed Weapon by a Person Convicted of Domestic Abuse Battery |          520          |
  |   Added   |     14:93     | Cruelty to Juveniles - Minor Injuries                                                                     |          13B          |
  |   Added   |     3:2803     | Livestock at Large Upon Certain Highways                                                                  |          90Z          |
  | Unexpired |    14:94/E    | Illegal use of weapons or dangerous instrumentalities                                                     |          13A          |
  | Unexpired |    14:94/F    | Illegal use of weapons or dangerous instrumentalities                                                     |          520          |
* Please note that the changes to 14:94/E and 14:94/F do not effect the base 14:94 - You can still report 14:94 as a 520 or 13A.

#### 2021-01-18

* Back in November we found that some Agencies were sending us LEOKA data for Victims that weren't of Type 'L - Law Enforcement', which was causing issues with our IEPD XML Submissions. At the time, there were only a few Incidents across a few Agencies that had this happening, so it was thought to be a User issue. Not wanting those Agencies to focus on a minor data entry issue rather than serious data quality issues that were present, we decided to set up an Error that would only start being checked after the New Year had begun.
  * Unfortunately, it turned out this was not just an isolated, User-Input issue, and there were some RMS's that were sending LEOKA data on every single Incident. When the date we had set in November flipped (Jan 15th, 2021), these Vendors/Agencies started getting thousands of errors. That was not our intention.
  * To resolve this, we made Error 15082 just a warning, and have it so that the data will be NULLed out before being imported into the database. This way you will be notified that there's something to fix, but it's not going to break anything on either the LIBRS or NIBRS sides of things.
* We found some places were Dates that are too old to store in our Database were being let through. You will now receieve an 11005 Error for any date you give us that's before 1875.

#### 2021-01-15

* Updated the Description and Logic for Error 13091. In a recent code update we started rejecting Property Descriptions of 77 - Other with $0 Values. This was not correct and has been reversed.
* Added Sample Scenarios to the FAQ. We'll be building this list up as the year goes on.

#### 2021-01-13

* There's a lot confusion around a new error we've recently added: LIBRS Error 90044 (Based on NIBRS Error 085).
  * In the [IEPD XML Documentation](https://www.fbi.gov/file-repository/ucr/ucr-2019-1-nibrs-xml-developers-guide.pdf), on Page 104 it states that DE 34 (Subject/Victim Association) must be included if it's a Crime Against Person or Property (first bullet point).
  * Further down, Error 085 talks about how if more than one Offender is in an Incident, and the Victim is related to a Crime Against Person or a Robbery, then at least two Offenders should be related to that Victim.
  * When we got to thinking about it, there was confusion of if this meant we now needed to include V/O Data on Crimes Against Property, as well. Assuming that the full text requirements of the Data Element were correct, we went with that and added Error 90044 to LIBRS, using the wording for NIBRS Error 085, but substituting Robbery for Crimes Against Property.
  * However, we failed to consider the confusion it would cause due to it now implying that all Crimes Against Property should have Victim/Offender Relationship data. That wording led to some Vendors making it so that V/O Data was included in all Crimes Against Property, which gave them a number of 15059 Errors stating that they shouldn't be including that.

#### 2020-12-16

* Consolidated the requirements for Data Element 14 (Property Loss Type). We had several Error Codes that weren't listed in the documentation that effectively just said "You can't use that Property Loss Type with this Offense Code".
  * Error 10081 will be thrown when that error occurs now, rather than 90028, 90039, or 90041.
  * You can check the for the full [List of Available Values](./data-element-values#allowable-property-loss-types-de-14-by-nibrs-and-attempedcompleted) of Property Loss Types that are allowed for each Offense Code. If an Offense Code is not present on the list, then a Property isn't to be submitted with it.
* Found that we were not validating Arrest Dates against the Reporting Period, and added Error 16082 to catch that.
  * EG: If an Incident Occured 7/1/2020, and the Arrest was made on 8/1/2020, the Arrest should not be included with the 07/2020 Submission File. Rather it should be included in the 08/2020 file (Or later if other edits are made).
    * An Arrest should only be reported if the Arrest Date occurs in or before the Reporting Period's month. So an Arrest Date of 7/15/2020 would be fine for the case above to report on the 07/2020 file, just nothing after 07/2020 should be included. Realistically, just don't send the entire incident until the first applicable month that it can be submitted without date errors.

#### 2020-12-14

* Updated the requirements for DE 33 - Injury Type. Error 15003 was previously deprecated and rolled into Error 15020, however the Error Number was not updated properly, and thus it remained in the documentaiton.
  * Minor change in requirement numbers:
    </br>| : Old Req. No.: | :New Req. No.: |
    | --------------- | -------------- |
    | 1               | 1              |
    | 3               | 2              |
    | 4               | 3              |
    | 5               | 4              |
    | 6               | 5              |

#### 2020-12-11

* Revised wording on Segment 11 Description to be more accurate.
* Modified NIBRS Mappings for LRS 14:110.2 from 90Z to 290.
* Fixed an incorrect Error Code for when a Victim Injury was included but shouldn't (Was throwing a 15020, should have been 15019).

#### 2020-12-01

* Refined the logic that was looking at Segments 60, 61, and 62, and whether they should be included or not.
  * Segment 60 is always allowable for I, W, A, and M Action Types, however the code we had was just counting the number of Segment 61's and 62's that were in the file. So you could have 50 arrests in the file, but only one Segment 61 and 62 and it would still validate properly.
  * New code makes it that you'll get errors if you have a Segment 60 and that Arrestee Sequence Number doesn't also link up with a Segment 61 and 62.
* Fixed code that was leaving out Error 90041 from the documentation.

#### 2020-11-04

* Added logic that will throw an error when LEOKA-related fields are included with non-Leoka Victims.
  * New Error Code: 15082 - "VICTIM TYPE MUST BE 'L - LAW ENFORCEMENT' FOR DATA TO BE ENTERED"

#### 2020-10-27

* We noticed that we actually weren't validating if all Property Sequence Numbers (DE P1) were Unique. We had a requirement for it, but no code to back that up. Added Error 12006 as as error when that happens.
* Made a number of LRS Code Updates. Here are the new Codes, Descriptions, and Mappings:
  * Note that the 14:41-Series of Offenses had improper NIBRS Codes Associated with them. We were allowing 11A and 11B for all of them, but have reduced it to only those listed here.| Action | Statute Number | Description                                                                                                                   | Available NIBRS Codes |
    | :-----: | :------------: | :---------------------------------------------------------------------------------------------------------------------------- | :-------------------: |
    |  Added  |    14:102.2    | Seizure and Disposition of Animals Cruelly Treated                                                                            |          720          |
    |  Added  |     14:12     | Criminal Negligence                                                                                                           |          90Z          |
    |  Added  |     14:24     | Principal                                                                                                                     |          90Z          |
    |  Added  |     14:32     | Prohibited Usage of Tracking Device(s)                                                                                        |          13C          |
    |  Added  |     14:329     | Interference with a Law Enforcement Investigation                                                                             |          90Z          |
    |  Added  |     14:338     | Interfering with Emergency Communication                                                                                      |  13B, 13C, 290, 90Z  |
    |  Added  |     14:36     | Assault - Attempt to Commit Battery                                                                                           |       13A, 13B       |
    |  Added  |    14:40.7    | Cyberbullying                                                                                                                 |       13C, 64A       |
    |  Added  |   14:95.1.3   | Fraudulent Firearm and Ammunition Purchase                                                                                    |          520          |
    |  Added  |     17:221     | School Attendance                                                                                                             |          90F          |
    |  Added  |    27:30.1    | Unlawful use of State-Issued Identification to Gain Access to a Gaming Establishment or in Conjunction with Gaming Activities |          39A          |
    |  Added  |  14:128.1/A1  | Terrorism - Intentional Killing of a Human Being                                                                              |          09A          |
    |  Added  |  14:128.1/A2  | Terrorism - Intentional Infliction of Serious Bodily Injury Upon a Human Being                                                |          13A          |
    |  Added  |  14:128.1/A3  | Terrorism - Kidnapping of a Human Being                                                                                       |          100          |
    |  Added  |  14:128.1/A4  | Terrorism - Aggravated Arson upon any Stricture, Watercraft, or Movable                                                       |          200          |
    |  Added  |  14:128.1/A5  | Terrorism - Intentional Aggravated Criminal Damage to Property                                                                |          290          |
    |  Added  |     14:94     | Illegal use of weapons or dangerous instrumentalities                                                                         |       13A, 520       |
    | Updated |    14:41/V    | First Degree Rape, Vaginal                                                                                                    |          11A          |
    | Updated |    14:41/O    | First Degree Rape, Foreign Object                                                                                             |          11B          |
    | Updated |    14:41/A    | First Degree Rape, Anal                                                                                                       |          11B          |
    | Updated |    14:30.1    | Second Degree Murder                                                                                                          |       13A, 09A       |
    | Updated |     14:31     | Manslaughter                                                                                                                  |     13A, 09A, 09B     |
    | Expired |    14:6717    | Theft of Motor Vehicle Fuel                                                                                                   |  No longer accepted  |
    | Expired |   40:1238.2   | Prescription Requirements; Penalties.                                                                                         |  No longer accepted  |
    | Expired |    14:94/E    | Illegal use of weapons or dangerous instrumentalities                                                                         |  No longer accepted  |
    | Expired |    14:94/F    | Illegal use of weapons or dangerous instrumentalities                                                                         |  No longer accepted  |

#### 2020-10-23

* A helpful DBA alerted us that that we had some LRS Codes that, while their Descriptions exist in the law, the LRS Code didn't actuall exist. We've expired those bad codes and added new ones to replace them (Thanks for the tip!). They've retained the same details like their Descriptions and NIBRS Mappings, just updated the LRS to be the correct one:| Old Code | New Code |
  | :------: | :------: |
  | 15:11.30 | 14:71.3 |
  | 15:13.80 | 14:73.8 |
  | 15:29.60 | 14:89.6 |
  | 15:31.30 | 14:91.3 |
  | 15:31.40 | 14:91.4 |
  | 15:38.3 | 14:98.2 |
  | 15:38.30 | 14:98.8 |

#### 2020-10-22

* Fixed a bug where DE L45 - Arrest Connection to Offense was only being checked for an Offense Sequence Number between 001 and 999.
  * DE L45 should be 15 characters long, and combine a valid Offense Sequence Number and Incident Number together.
    * EG: If an Offender is Arrested for Offense Sequence Number 001 from Incident Number 20-000001-01, the DE L45 should be '00120-000001-01'.
  * This is important because an Arrest should be reported with a Multiple Arrestee Indicator of 'M' for Multiple when that arrest clears another Incident by arrest, as well. In order words, the arrest that you have listed in an Incident's Segment 62 might not be related to one of the Offenses in that Incident; it could be from another Incident.
  * Added Error 90043 - 'DE L45 IS REQUIRED AND SHOULD BE A 15 CHARACTER STRING THAT COMBINES A VALID OFFENSE SEQUENCE NUMBER AND INCIDENT NUMBER' to support this fix.

#### 2020-10-16

* Boatload of changes and enhancements to the Documentation:
  - Went through all of the Errors in LIBRS and determined if they were getting hit or not.
  - Went through the Documentation, removing errors that don’t trigger and adding missing ones that do.
  - Refined all context for Errors for Segments, Data Elements, and Mandatories.
  - For each active error, verified the logic that causes it to be thrown, and where an error appears multiple times in the code verified that similar logical conditions caused it to throw.
  - Consolidated Error Codes where possible to eliminate things like having 12 errors that all say "Can’t be Blank – Mandatory Data Element".
  - Created a few new Error Codes in places where existing ones didn't cut it:
  - Update Error Messages to get rid of Misspellings, bad formatting, and out of date information (EG: 'WHEN LRS = 240' now will say something like 'WHEN NIBRS = 240') both in LIBRS and the Documentation.
  - Consolidated the Segment, Data Element, and NIBRS Mandatory Documentation into a single page so you can find errors with a single CTRL + F.
  - Added a list of the available Property Loss Types by Attempted/Completed and NIBRS Code to the Available Data Elements Page.
  - Added descriptions and context to each Data Element, giving information about whether it’s required or not, when it should be left blank, how it should be formatted, etc…
  - Added logic to stop processing an Offense if the LIBRS to NIBRS Mapping doesn't exist.
    - Requirements are heavily NIBRS Code dependent, so it doesn't make sense to process Incidents that don't have a valid mapping.
  - Add Documentation for Inchoates

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

* Added "How to Solve Errors in Flat Files" and "What's Wrong with my Flat File" to the <a href="./faq">FAQ </a>.

#### 2020-07-21

* Added an <a href="./faq">FAQ </a> to this site. We're going to start posting the questions and responses that we get from Vendors and users to start building that up for everyone's reference.

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

---

<br>

#### More information about the LIBRS Program and its requirements can be found at <a href="http://www.crimeinla.org">http://www.crimeinla.org </a>
