---
title: Data Model Specifications
layout: default
permalink: /models
---
# Data Model Specifications

This page contains the specifications on how to use the data models found on our github pages:

* LIBRS Models - [https://github.com/teisdbr/LibrsDataModels](https://github.com/teisdbr/LibrsDataModels)
  * Contains the models used for our JSON Validator, as well as the NIBRS-Based model, which includes a NIBRS Report plus the other things that LIBRS cares about (vendors need to create the constructors between the two).
* NIBRS Models - [https://github.com/teisdbr/NibrsDataModels](https://github.com/teisdbr/LibrsDataModels)
  * Contains the NIBRS IEPD Report as C# Objects.

# LIBRS Data Models

These models are meant to be a simplification of the existing Flat File format, but still meant to be compatible with it. For instance, in some places entire segments have been removed and rolled into other ones (EG: Segment 51 - Victim Injury is gone, and instead injuryType is just a property of Victim now).

<br/>

## [Quick Start](#quick-start)

To get down to it, the easiest way to start incorporating the LIBRS JSON models would be to convert existing Flat Files to JSON Format, and compare the inputs and outputs. You can do this with the ValidateFFtoJSON Endpoint. See below for details. You can also view more in-depth information on the Swagger Page for the API: [https://json.librs.org:5000/swagger/index.html](https://json.librs.org:5000/swagger/index.html) ***Note:*** It's been brought to our attention that Swagger will remove the New Line characters from the request, which will cause the FFToJson and ValidateFFToJson requests to fail. The recommended workaround is to use Postman.

### API Endpoints

Currently the JSON Validator is hosted at [https://json.librs.org:5000](https://json.librs.org:5000).

| Endpoint              | Body Requirement                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /api/jsonvalidate     | An RVO (Root Validation Object) containing an array of LIBRS Incidents to be processed. Body should be formatted as application/json. No authentication/authorization is required for validation. | This is the API Endpoint that will take one an RVO with any number of JSON-formatted LIBRS Incidents, and return the validation plus the original object as an extended RVO. Can be used to both validate and submit data.                                                                  |
| /api/fftojson         | A LIBRS Flat File (Whole thing, Header to Footer). Can contain as many incidents as desired. Body should be formatted as text/plain. No authentication/authorization is required for use.         | This Endpoint will take an existing LIBRS Flat File, and convert it to an RVO. This is useful when first getting started so you can see how the old Flat File segments have been converted into Objects. This endpoint does not store any data, and cannot be used for monthly submissions. |
| /api/validatefftojson | A LIBRS Flat File (Whole thing, Header to Footer). Can contain as many incidents as desired. Body should be formatted as text/plain. No authentication/authorization is required for use.         | Similar to FFtoJSON, this endpoint will also validate the converted JSON File, returning both the converted RVO and validations of the Incident(s) to the User.                                                                                                                             |

<br/>

### JSON Process

* **Validation**:
  * **The JSONValidate public endpoint is currently in "validation-only" mode, meaning it only checks the validity of the data without storing or tracking it. Agencies can use this endpoint as frequently as needed, independent of the actual submission process**
* **Submission:**
  * Agencies submit JSON files to their designated LIBRS FTP data folder.
  * Each JSON file should correspond to a specific report month. See the LIBRS Data model for the JSON format.
* **Processing:**
  * The LIBRS batch processor will handle the files once submitted.
  * The files are processed in "submit" mode, and automated emails and files are generated and placed into the agencies' corresponding FTP folders.
  * The JSON file is moved to “Processed” FTP folder appended with the LIBRS run number.
* **Handling Errors:**
  * Files that fail validation are moved to a “failed” FTP folder.
  * Files submitted out of sequence or before the agency's start date are moved to an “outofsequence” FTP folder.
  * Logs are created to document the failure for review and troubleshooting.
* **Post-Processing:**
  * Scorecard and error detail reports are available in the agencies' FTP folders.
  * Interactive analytics are accessible via TrackCrime.
  * If the agency is certified, accepted LIBRS data is forwarded to the FBI.
* **Security and Authorization:**
  * Agencies must use their LIBRS FTP credentials to ensure authorized submissions.
  * Agencies that need to test submissions with a new vendor or during transitions may require a separate Agency and FTP account for the recertification period.

<br/>

## [Root Validation Object](#root-validatior-object)

This is the primary object that is used in the JSON Validator. It contains the following properties/objects:

| Property Name                       | Data Type               | Description                                                                                                       | Required                                |
| ----------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Spec                                | String                  | LIBRS Spec version that the file follows (currently 2.5)                                                          | Yes                                     |
| Ori                                 | String                  | ORI of the Submitting Agency                                                                                      | Yes                                     |
| ReportYear                          | Integer                 | 4-Digit Reporting Period Year                                                                                     | Yes                                     |
| ReportMonth                         | Integer                 | Reporting Period Month                                                                                            | Yes                                     |
| AgencyName                          | String                  | Descriptive Name of the Agency                                                                                    | No (Legacy DE - Not used in validation) |
| SoftwareID                          | String                  | Name of the RMS Generating the Data                                                                               | Yes                                     |
| SoftwareVersion                     | String                  | Version of the RMS Generating the Data                                                                            | Yes                                     |
| ForSubmission                       | Boolean                 | Set this Booleen to False for validation mode. Agencies can use the API to validate data as needed. If the JSON file is submitted via the agency’s FTP, this booleen will automatically be set to true and picked up through the LIBRS JSON batch processor. 
 | No (Assumed False if missing or NULL)   |
| ZeroReport                          | Boolean                 | Boolean that tells us there's no data for this Agency for the specified Reporting Period and Year                 | No (Assumed False if missing or NULL)   |
| [IncidentList](#librs-incident-object) | List of Librs Incidents | The actual Incident Data in the form of a List of the LibrsIncident object.                                       | Yes                                     |

---

<br>

## Example JSON Incident

Before we get too far into things, here's a quick example of the entire RVO (Root Validation Object):

```json
{
    "spec": "2.5",
    "ori": "LA0320100",
    "reportYear": 2021,
    "reportMonth": 9,
    "agencyName": null,
    "softwareId": null,
    "softwareVersion": null,
    "forSubmission": false,
    "zeroReport": false,
    "incidentList": [
        {
            "actionType": "I",
            "incidentNumber": "21-000002-01",
            "admin": {
                "location": "            ",
                "stationID": null,
                "incidentDate": "2021-07-01T16:00:00Z",
                "isReportingDate": false,
                "clearedExceptionally": "N",
                "excpClearDate": null
            },
            "offense": [
                {
                    "offenseSeqNum": 1,
                    "isCompleted": true,
                    "offConnectToVic": 1,
                    "locationType": 48,
                    "premises": null,
                    "methodOfEntry": null,
                    "criminalActivity": [
                        "D"
                    ],
                    "weapons": [],
                    "cargoTheft": null,
                    "agencyAssignedNibrs": "35A",
                    "propertyLossTypeFlags": null,
                    "lrsNumber": "40:1060.13"
                }
            ],
            "propDesc": [
                {
                    "propertySeqNum": 1,
                    "propertyLossType": 6,
                    "propertyDescription": 10,
                    "propertyValue": null,
                    "dateRecovered": null,
                    "suspectedDrugType": "G",
                    "counterfeitDrug": false,
                    "estimatedDrugQty": 1.0,
                    "typeDrugMeas": "DU"
                }
            ],
            "propertyOffense": [
                {
                    "propertySequenceNumber": 1,
                    "offenseSequenceNumber": 1
                }
            ],
            "offender": [
                {
                    "offenderSeqNum": 1,
                    "age": "0",
                    "estimatedAge": false,
                    "dob": null,
                    "sex": "M",
                    "race": "U",
                    "gender": "   ",
                    "biasMotivation": null,
                    "ethnicity": "N",
                    "usingGaming": []
                    }
            ],
            "victim": [
                {
                    "officerActivity": null,
                    "victimSeqNum": 1,
                    "victimType": "S",
                    "age": null,
                    "estimatedAge": false,
                    "dob": null,
                    "sex": " ",
                    "gender": "   ",
                    "race": " ",
                    "ethnicity": " ",
                    "residentStatus": " ",
                    "aggravatedAssault": [],
                    "additionalHomicide": " ",
                    "precipitatingOffense": "   ",
                    "officerAssignmentType": null,
                    "officerOri": null,
                    "injuryType": " ",
                    "relatedOffenders": null
                }
            ],
            "arrestee": []
        }
    ]
}
```

---

<br/>

## [Librs Incident Object](#librs-incident-object)

The LibrsIncident object is the object that will be populated for each Incident that is being submitted. You'll notice that not all Flat File Segments are represented by child objects. This is because we have been working on simplifying the objects where we can. For instance, Segment 41 - Offender Using/Gaming is gone, and instead represented by a property in the Offender Object.

***THIS IS SUBJECT TO CHANGE*** - Don't hold this as gospel. We will probably make more changes to this to make things simpler, like rolling in the Arrestee Statute Segment into the Arrestee, as well.

Basically, the only things that are required are what make it an Incident - Admin, Offense, and a Victim. And we also need to know the Incident Number and if it's an insertion or a deletion, so Action Type and Incident Number are also needed. Everything else can be left out of the JSON Object if it's not relevant (EG: Property Segment 30 for an Aggravated Assault).

| Property Name                            | Data Type                       | Description                                                                    | Required                           |
| ---------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------- |
| ActionType                               | String                          | Action Type for this Incident (Insert, Delete, etc...)                         | Yes                                |
| IncidentNumber                           | String                          | Incident Number of this Incident                                               | Yes                                |
| [Admin](#admin-object)                      | Admin Object                    | Admin Segment (10) represented as a C# Object                                  | Yes                                |
| [Offense](#offense-object)                  | List of Offense Objects         | List of Offense Segments (20) represented as a C# Object                       | Yes                                |
| [PropertySeg](#property-object)             | PropertySeg Object              | Property Segment (30) represented as a C# Object                               | No                                 |
| [PropDesc](#property-description-object)    | List of PropDesc Objects        | List of Property Description Segments (31) represented as a C# Object          | No                                 |
| [PropertyOffense](#property-offense-object) | List of PropertyOffense Objects | List of Property/Offense Relationship Segments (33) represented as a C# Object | No                                 |
| [Offender](#offender-object)                | List of Offender Objects        | List of Offender Segments (40) represented as a C# Object                      | No                                 |
| [Victim](#victim-object)                    | List of Victim Objects          | List of Victim Segments (50) represented as a C# Object                        | Yes                                |
| [Arrestee](#arrestee-object)                | List of Arrestee Objects        | List of Arrestee Segments (60) represented as a C# Object                      | No                                 |
| [Errors](#errors-object)                    | List of Error Objects           | List of LIBRS Errors represented as a C# Object                                | No (Returned back in API Response) |
| [Warnings](warnings-object)                 | List of Warning Objects         | List of LIBRS Warnings represented as a C# Object                              | No (Returned back in API Response) |

<br>

---

<br>

### [Admin Object](#admin-object)

This is a C# Object that represents the existing Administrative Segment (10) from the Flat File. Some properties have been pulled out into the Root Validation Object (RVO) and thus don't need to be repeated here or in other segments.

| Property Name        | Data Type | Description                                                                             | Required                                                  |
| -------------------- | --------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Location             | String    | 12-Character String of the Incident Location Type (DE 9)                                | No (Defaults to blank spaces)                             |
| StationID            | String    | 6-Character String of the Agency's Station ID (DE L54)                                  | No (Defaults to blank spaces)                             |
| IncidentDate         | DateTime  | **UTC** Formatted Datetime of the Incident (DE 3)                                 | Yes                                                       |
| IsReportingDate      | Boolean   | Boolean that replaces the R Modifier in DE 3                                            | No (Defaults False)                                       |
| ClearedExceptionally | String    | 1-Character String to represent the Exceptional Clearance Status of the Incident (DE 4) | No (Defaults to "N" for None)                             |
| ExcpClearDate        | DateTime  | UTC Formatted Datetime of the Exceptional Clearance Date (DE 5)                         | If ClearedExceptionally is not N, then Yes. Otherwise No. |

**Example**

```json
"admin": {
          "location": "            ",
          "stationID": "      ",
          "incidentDate": "2021-05-29T05:00:00",
          "isReportingDate": false,
          "clearedExceptionally": "N",
          "excpClearDate": null
         }
```

---

<br>

### [Offense Object](#offense-object)

This is a C# Object that represents the existing Offense Segment (20) from the Flat File. You can include as many as required in the form of an array of these objects.

| Property Name          | Data Type       | Description                                                                                                                                                                                                                   | Required                                                                    |
| ---------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| OffenseSequenceNum     | Integer         | Number to Uniquely Identify the Offense (DE L6)                                                                                                                                                                               | Yes                                                                         |
| AttemptedCompleted     | String          | 1-Digit Character (A for Attempted, or C for Completed) that depicts if the offense was Attempted or fully committed (Completed) (DE 7)                                                                                       | Yes                                                                         |
| OffConnecttoVic        | Integer         | Number that links the Offense to a single Victim via the Victim's Sequence Number (DE 24)                                                                                                                                     | Yes                                                                         |
| LocationType           | Integer         | Number that describes the Location in which the Offense took place (DE 9)                                                                                                                                                     | No                                                                          |
| Premises               | Integer         | Number that describes the Number of Premises an Offender Entered (DE 10)                                                                                                                                                      | Yes if the Offense is Burglary and Location Type is 14 or 19, otherwise, no |
| MethodOfEntry          | String          | 1-Digit Character (F for Force, or N for No Force) that describes how the Offender entered a location in case of a Burglary. (DE 11)                                                                                          | Yes if the Offense is Burglary, otherwise, no                               |
| CriminalActivity       | List of Strings | List (up to three) 1-Digit Characters to represent three types of Criminal Activity/Gang Information involved in an Offense (DE 12)                                                                                           | Yes                                                                         |
| [Weapons](#weapon-object) | List of Weapons | List of the[Weapons Object](#weapon-object), which contains a property for the weapon type, if it was an automatic firearm, if a firearm was stolen, and if a firearm was discharged in committing the offense (New DE)          | No (Defaults to Empty List)                                                 |
| CargoTheft             | Boolean         | Boolean value to indicate whether or not an Offense involved cargo theft. If any are true, the Incident-Level DE for the NIBRS Report will also reflect True, but for Louisiana we want to know about the individual Offense. | No (Defaults to False)                                                      |
| AgencyAssignedNibrs    | String          | 3-Digit String of the NIBRS Code of the Offense at hand. (DE N6)                                                                                                                                                              | Yes                                                                         |
| LrsNumber              | String          | Up to 12-Digits of Characters to represent the Louisiana Revised Statute (LRS) Code of the Offense at hand (DE 6)                                                                                                             | Yes                                                                         |

**Example**

```json
"offense": [
                {
                    "offenseSeqNum": 1,
                    "attemptedCompleted": "C",
                    "offConnecttoVic": 1,
                    "locationType": "20",
                    "premises": null,
                    "methodOfEntry": " ",
                    "criminalActivity": [
                        "N"
                    ],
                    "weapons": [
                        {
                            "weaponForce": "12",
                            "automatic": false,
                            "stolenFirearm": false,
                            "dischargedFirearm": false
                        }
                    ],
                    "cargoTheft": false,
                    "agencyAssignedNibrs": "09A",
                    "lrsNumber": "14:30.1"
                },
                {
                    "offenseSeqNum": "002",
                    "attemptedCompleted": "C",
                    "offConnecttoVic": "002",
                    "locationType": "20"
                    "criminalActivity": [
                        "N"
                    ],
                    "weapons": [
                        {
                            "weaponForce": "40",
                            "automatic": false,
                            "stolenFirearm": null,
                            "dischargedFirearm": null
                        }
                    ],
                    "agencyAssignedNibrs": "13B",
                    "lrsNumber": "14:35.2"
                }
            ]
```

---

<br>

### [Property Object](#property-object)

This is a C# Object that represents the existing Property Segment (30) from the Flat File. This Object is optional if you have no information to give us (EG: The only offense is an Aggravated Assault and has nothing to do with stolen vehicles). If you don't include it, we fill in a blank object automatically, so the number of stolen and recovered vehicles will be the same as if they were left as blank spaces in the Flat File.

This may go away in the future and be tallied based on the Property Descriptions that are given to us, since all it contains is the number of stolen and recovered vehicles.

| Property Name          | Data Type | Description                                                                      | Required |
| ---------------------- | --------- | -------------------------------------------------------------------------------- | -------- |
| NumOfStolenVehicles    | Integer   | Number to define the number of vehicles that were stolen in an Incident. (DE 18) | No       |
| NumOfRecoveredVehicles | Integer   | Number to define the number of vehicles that were stolen in an Incident. (DE 19) | No       |

**Example**

```json
"propertySeg": {
                "numOfStolenVehicles": 1,
                "numOfRecoveredVehicles": 1
            }
```

---

<br>

### [Property Description Object](#property-description-object)

This is a C# Object that represents the existing Property Description Segment (31) from the Flat File. You can include as many as you like as an array of this object.

| Property Name       | Data Type | Description                                                                                                   | Required                      |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| PropertySeqNum      | Integer   | Number to uniquely identify the Property that's being described (DE P1)                                       | Yes                           |
| PropertyLossType    | Integer   | Number to describe the Loss Type of the Property that is being Described. (DE 14)                             | Yes                           |
| PropertyDescription | Integer   | Numbered Code that's used to describe what the actual property is (DE 15)                                     | Yes                           |
| PropertyValue       | Integer   | Number that's used to identify the value of the Property that's being described (DE 16)                       | No                            |
| DateRecovered       | Datetime  | **UTC** Datetime of when the Property was Recovered (DE 17)                                             | No                            |
| SuspectedDrugType   | String    | 2-Digit String that is used to Identify the kind of drug the Property is if its Description is "Drug" (DE 20) | No (Defaults to blank spaces) |
| EstimatedDrugQty    | Decimal   | Decimal Number to represent the quantity of a drug based on the selected Measurement Type (DE 21)             | No                            |
| TypeDrugMeas        | String    | 2-Digit String of the shortcode for the measurement type (DE 22)                                              | No (Defaults to blank spaces) |

**Example**

```json
"propDesc": [
                {
                    "propertySeqNum": 1,
                    "propertyLossType": 5,
                    "propertyDescription": 3,
                    "propertyValue": 10000,
                    "dateRecovered": "2020-07-31T05:00:00",
                    "suspectedDrugType": "  ",
                    "estimatedDrugQty": null,
                    "typeDrugMeas": "  "
                },
                {
                    "propertySeqNum": 2,
                    "propertyLossType": 6,
                    "propertyDescription": 10,
                    "propertyValue": null,
                    "dateRecovered": null,
                    "suspectedDrugType": "L ",
                    "estimatedDrugQty": 2.0,
                    "typeDrugMeas": "GM"
                }
    ]
```

---

<br>

### [Property Offense Object](#property-offense-object)

This is a C# Object that represents the existing Property Offense Relationship Segment (33) from the Flat File. You can include as many as you like as an array of this object. It's just a simple pair of Property Sequence Numbers and Offense Numbers so we can accurately link together the Properties to their associated Offense(s).

| Property Name          | Data Type | Description                                                                  | Required |
| ---------------------- | --------- | ---------------------------------------------------------------------------- | -------- |
| PropertySequenceNumber | Integer   | Number to identify the Property we want to relate to an Offense (DE P1R)     | Yes      |
| OffenseSequenceNumber  | Integer   | Number to uniquely identify the Offense that the Property goes with (DE L6R) | Yes      |

**Example**

```json
"propertyOffense": [
                {
                    "propertySequenceNumber": 1,
                    "offenseSequenceNumber": 2
                },
                {
                    "propertySequenceNumber": 2,
                    "offenseSequenceNumber": 1
                }
            ]
```

---

<br>

### [Offender Object](#offender-object)

This is a C# Object that represents the existing Offender Segment (40) from the Flat File. You can include as many as you like as an array of this object. It also wraps the Offender Using Segment (41) into it, so that Segment/Object doesn't exist.

| Property Name  | Data Type       | Description                                                                                                                                                        | Required |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| OffenderSeqNum | String          | Number to uniquely identify the Offender that's being specified (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 36) | Yes      |
| Age            | String          | String to represent the Offender's Age                                                                                                                             | Yes      |
| EstimatedAge   | Boolean         | True/False value to tell us if the Age is an Estimate (replaces the "E" Modifier from the Flat File)                                                               | No       |
| Dob            | DateTime        | **UTC** Datetime of the Offender's Birthdate                                                                                                                 | No       |
| Sex            | String          | 1-Digit Character to represent the biological sex of the Offender M, F, or U                                                                                       | Yes      |
| Race           | String          | 1-Digit Character to represent the race of the Offender                                                                                                            | Yes      |
| Gender         | String          | 3-Digit Character String to represent the Gender Identity of the Offender. Note, we don't actually have any requirements for this right now, but it is a thing.    | No       |
| BiasMotivation | Integer         | Number to represent the Bias/Motivation Type                                                                                                                       | Yes      |
| Ethnicity      | String          | 1-Digit Character to represent the Ethnicity of the Offender                                                                                                       | Yes      |
| UsingGaming    | List of Strings | List of 1-Digit Strings to represent the Using/Gaming Motivation Types of the Offender                                                                             | Yes      |

**Example**

```json
"offender": [
                {
                    "offenderSeqNum": 1,
                    "age": "37",
                    "estimatedAge": false,
                    "dob": null,
                    "sex": "M",
                    "race": "B",
                    "gender": "   ",
                    "biasMotivation": 88,
                    "ethnicity": "U",
                    "usingGaming": [
                        "N"
                    ]
                }
            ]
```

---

<br>

### [Victim Object](#victim-object)

This is a C# Object that represents the existing Offender Segment (40) from the Flat File. You can include as many as you like as an array of this object. Please note that it also includes the Victim Injury Segment (51) and the Victim/Offender Relationship (52) in it, so those are no longer separate Segments/Objects to be reported.

| Property Name               | Data Type              | Description                                                                                                                                                                                                                                                                                          | Required                               |
| --------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| VictimSeqNum                | Integer                | Number to uniquely identify the Victim that's being specified (DE 36)                                                                                                                                                                                                                                | Yes                                    |
| VictimType                  | String                 | 1-Digit Character to represent the Type of Victim being described                                                                                                                                                                                                                                    | Yes                                    |
| Age                         | String                 | String to represent the Victim's Age                                                                                                                                                                                                                                                                 | Yes                                    |
| EstimatedAge                | Boolean                | True/False value to tell us if the age of the Victim is an Estimate (replaces the E Modifier from Flat File)                                                                                                                                                                                         | No                                     |
| Dob                         | DateTime               | **UTC** Datetime of the Victim's Birthdate                                                                                                                                                                                                                                                     | No                                     |
| Sex                         | String                 | 1-Digit Character to represent the Biological Sex of the Victim - M, F, or U                                                                                                                                                                                                                         | Yes                                    |
| Race                        | String                 | 1-Digit Character to represent the Race of the Victim                                                                                                                                                                                                                                                | Yes                                    |
| Gender                      | String                 | 3-Digit Character String to represent the Gender Identity of the Victim. Note, we don't actually have any requirements for this right now, but it is a thing.                                                                                                                                        | No                                     |
| Ethnicity                   | String                 | 1-Digit Character to represent the Ethnicity of the Victim                                                                                                                                                                                                                                           | Yes                                    |
| ResidentStatus              | String                 | 1-Digit Character to represent the Permanent Resident/Citizenship status of the Victim.                                                                                                                                                                                                              | No                                     |
| AggravatedAssault           | List of Integers       | List of up to two Numbers to describe the Aggravated Assault Circumstances, Negligent Manslaughter Circumstances, or Justifiable Homicide Circumstances (Dependent on the NIBRS Code of the Offense the Victim is associated with).                                                                  | 13A, 09A, 09B, & 09C                   |
| AdditionalHomicide          | String                 | 1-Digit Character to further describe the circumstances surrounding an 09C - Justifiable Homicide.                                                                                                                                                                                                   | If Offense related to Victim is 09C    |
| PrecipitatingOffense        | String                 | 3-Digit NIBRS Code of the Offense that the Victim was committing when an 09C - Justifiable Homicide occurred. Note that the Victim of an 09C is the Offender of another Offense. This offense may or may not be reported alongside the 09C, so this DE is intended to capture that in case it isn't. | If Offense related to Victim is 09C    |
| OfficerActivityCircumstance | Integer                | Number to describe the actions/activities an Officer was performing when they became the Victim of an Offense.                                                                                                                                                                                       | If Victim is Type "L"                  |
| OfficerAssignmentType       | String                 | 1-Digit Character to describe the role the Officer that was the Victim of an Offense was performing/a part of when the Offense occurred.                                                                                                                                                             | If Victim is Type "L"                  |
| OfficerOri                  | String                 | 9-Digit String of the Victim Officer's ORI Number                                                                                                                                                                                                                                                    | If Victim is Type "L"                  |
| InjuryType                  | String                 | 1-Digit Character to represent the Injury Type of the Victim                                                                                                                                                                                                                                         | For Crimes Against Person              |
| RelatedOffenders            | List of VicOff Objects | Object that contains the Victim Sequence Number, Offender Sequence Number, and their relationship. This will get revised to only be the Offender Number and Relationship.                                                                                                                            | For Crimes Against Person and Property |

**Example**

```json
"victim": [
                {
                    "victimSeqNum": 1,
                    "victimType": "I",
                    "age": "33",
                    "estimatedAge": false,
                    "dob": null,
                    "sex": "F",
                    "gender": "   ",
                    "race": "B",
                    "ethnicity": "U",
                    "residentStatus": "R",
                    "aggravatedAssault": [
                        10
                    ],
                    "additionalHomicide": " ",
                    "precipitatingOffense": "   ",
                    "officerActivityCircumstance": "  ",
                    "officerAssignmentType": " ",
                    "officerOri": "         ",
                    "injuryType": " ",
                    "relatedOffenders": [
                        {
                            "victimSeqNum": 1,
                            "offenderNumber": 0,
                            "relationship": "RU"
                        }
                    ]
                }
```

---

<br>

### [Arrestee Object](#arrestee-object)

This is a C# Object that represents the existing Arrestee Segment (60) from the Flat File. You can include as many as you like as an array of this object.

| Property Name             | Data Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required                     |
| ------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| ArrestSeqNum              | Integer            | Number to uniquely identify the Arrestee that's being specified (DE 36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes                          |
| ArrestNumber              | String             | 12-Digit Alpha/Numeric String of Characters that uniquely identifies the Arrest in the Agency's RMS                                                                                                                                                                                                                                                                                                                                                                                                                                         | Yes                          |
| ArrTransactionNumber      | String             | 15-Digit Alpha/Numeric String of Characters that uniquely Identifies the Arrestee in AFIS (DE L55)                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes                          |
| ArresteeName              | String             | 20-Digit Character String of the Arrestee's Name. Should be in the format of (Last)(Suffix),(First)(Middle)                                                                                                                                                                                                                                                                                                                                                                                                                                 | No                           |
| ArrestDate                | DateTime           | **UTC** Datetime of the Arrest                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes                          |
| ArrestType                | String             | 1-Digit Character to describe the nature of how the Arrest was Initiated - O, S, or T.                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes                          |
| MultipleArresteeIndicator | String             | 1-Digit Character that indicates if this Arrest should be counted towards the number of*people* arrested by an Agency. Sometimes an Offender will appear multiple times in the same Incident, or across multiple Incidents. Their arrest for one of these Offenses will subsequently "clear" the others, but since they were only physically arrested one time, the MAI should be used to denote that the Arrest record shouldn't affect the number of *people* the agency has arrested, only the number of Offenses cleared by arrest. | Yes                          |
| Age                       | String             | String to represent the Arrestee's Age.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes                          |
| EstimatedAge              | Boolean            | True/False value to tell us if the age of the Arrestee is an Estimate (replaces the E Modifier from Flat File)                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |
| Dob                       | DateTime           | **UTC** Datetime of the Arrestee's Birthdate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | No                           |
| Sex                       | String             | 1-Digit Character to represent the Biological Sex of the Arrestee - M, F, or U                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes                          |
| Race                      | String             | 1-Digit Character to represent the Race of the Arrestee                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes                          |
| Gender                    | String             | 3-Digit Character String to represent the Gender Identity of the Arrestee. Note, we don't actually have any requirements for this right now, but it is a thing.                                                                                                                                                                                                                                                                                                                                                                             | No                           |
| Ethnicity                 | String             | 1-Digit Character to represent the Ethnicity of the Arrestee                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes                          |
| ResidentStatus            | String             | 1-Digit Character to represent the Permanent Resident/Citizenship status of the Arrestee.                                                                                                                                                                                                                                                                                                                                                                                                                                                   | No                           |
| DispositionUnder17        | String             | 1-Digit Character used to describe how an Arrestee 17 years of age or younger was handled by the Agency.                                                                                                                                                                                                                                                                                                                                                                                                                                    | If Arrestee is 17 or younger |
| ArrestArmed               | List of Weapon     | List of[Weapon Objects](#weapon-object) (Same as in the Offense Object) that were found on the Arrestee's person at the time of Arrest.                                                                                                                                                                                                                                                                                                                                                                                                        | Yes                          |
| ArrestStatute             | List of ArrStatute | List of the[Arrestee Statute Objects](#arrestee-statute-object) associated with the Arrestee                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes                          |

**Example**

```json
"arrestee": [
                {
                    "arrestSeqNum": 1,
                    "arrestNumber": "     8675309",
                    "arrTransactionNumber": "               ",
                    "arresteeName": "DOE, JOHNATHAN Q",
                    "arrestDate": "2020-07-01T00:00:00Z",
                    "arrestType": "O",
                    "multipleArresteeIndicator": "N",
                    "age": "37",
                    "dob": "1980-01-31T00:00:00Z",
                    "sex": "M",
                    "gender": "   ",
                    "race": "W",
                    "ethnicity": "U",
                    "residentStatus": "U",
                    "dispositionUnder17": " "
                    "arrestArmed":
   		   							[{
                        "weaponForce": "40",
                        "automatic": false,
                        "stolenFirearm": null,
                        "dischargedFirearm": null
                			}],
										"arrestStatute": 
											[{
                        "arrestConToOffense": "00120-000000-01"
                        "agencyAssignedNibrs": "240",
                        "lrsNumber": "14:67.26"
                      },{
                        "arrestConToOffense": "00220-000000-01",
                        "agencyAssignedNibrs": "35A",
                        "lrsNumber": "40:967"
                      }]
                }
            ]
```

---

<br>

### [Errors Object](#errors-object)

The Errors Object is equivalent to the Error Details that are provided in the Flat File's Error Detail Report. We provide them back here so that the JSON Validator's API can be called within the RMS, and errors can be directly returned to the User.

This is a Read-Only object, you won't be sending this along with your data, only getting it back.

| Property Name  | Data Type | Description                                                                                                                                                                                                                                                    |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorCode      | Integer   | The Error Code of the Error (Typically a 5-Digit Number)                                                                                                                                                                                                       |
| ErrorMsg       | String    | The text of the Error Code describing what's wrong                                                                                                                                                                                                             |
| Contents       | String    | The particular data that was submitted that the validation had an issue with                                                                                                                                                                                   |
| DataElem       | String    | The particular data elements that the validation had an issue with                                                                                                                                                                                             |
| IncidentNumber | String    | The Incident Number that the validation had an issue with                                                                                                                                                                                                      |
| SegmentNumber  | String    | Legacy, but the equivalent of the Segment Number as it refers to the JSON Object that the validation error came from (Will get updated to just say what the name of the object was, but for now it spits out something like 20 if it doesn't like and Offense) |

---

<br>

### [Warnings Object](#warnings-object)

The Warnings Object is basically the same thing as the Errors Object, but just for warnings. Makes it easy to keep the actual Errors that are preventing the Incident from being accepted separate from just Warnings about it.

This is a Read-Only object, you won't be sending this along with your data, only getting it back.

| Property Name | Data Type | Description                                                                  |
| ------------- | --------- | ---------------------------------------------------------------------------- |
| ErrorCode     | Integer   | The Warning Code of the Warning (Typically a 5-Digit Number)                 |
| ErrorMsg      | String    | The text of the Warning Code describing what's wrong                         |
| Contents      | String    | The particular data that was submitted that the validation had an issue with |
| DataElem      | String    | The particular data elements that the validation had an issue with           |

---

<br>

## Incident Child Objects

The following Objects are used within the other objects that make up an Incident. :

---

<br>

### [Arrestee Statute Object](#arrestee-statute-object)

This is a C# Object that represents the existing Arrestee Statute Segment (62) from the Flat File. This will end up getting rolled into the Arrestee Object, but for now it is separate.

| Property Name       | Data Type | Description                                                                                                                                                                            | Required |
| ------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| ArrestConToOffense  | String    | 15-Character String that combines the Offense Sequence Number with the Incident Number EG XXXYY-YYYYYY-YY, where XXX is the Offense Sequence Number and YY-Y... is the Incident Number | Yes      |
| AgencyAssignedNibrs | String    | 3-Digit NIBRS Code of the Offense that the Arrestee was Arrested for.                                                                                                                  | Yes      |
| LrsNumber           | String    | 12-Digit LRS Code (Louisiana Revised Statute Code) that the Arrestee was Arrested for.                                                                                                 |          |

**Example**

```json
"arrStatute": [
                {
                    "arrestConToOffense": "00120-000000-01"
                    "agencyAssignedNibrs": "240",
                    "lrsNumber": "14:67.26"
                },
                {
                    "arrestConToOffense": "00220-000000-01",
                    "agencyAssignedNibrs": "35A",
                    "lrsNumber": "40:967"
                }
            ]
```

---

<br>

### [Weapon Object](#weapon-object)

This is an object that replaces the Type of Weapon/Force Data Element from the Flat File.

| Property Name     | Data Type | Description                                                                                                                          | Required            |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| WeaponForce       | Integer   | Number that represents the Type of Weapon Force being described                                                                      | Yes                 |
| Automatic         | Boolean   | True/False value that describes if the Weapon was an Automatic Weapon or not (only relevant for Firearms)                            | No (Defaults False) |
| StolenFirearm     | Boolean   | True/False value that describes if a Firearm was Stolen (only relevant for Firearms)                                                 | No (Defaults False) |
| DischargedFirearm | Boolean   | True/False value that describes if a Firearm was Discharged in the course of an Offense being committed (only relevant for Firearms) | No (Defaults False) |

**Example:**

```json
"weapon":
   		[{
        "weaponForce": 40,
        "automatic": false,
        "stolenFirearm": null,
        "dischargedFirearm": null
      }]
```

---

<br>

## Legacy LIBRS Values

In order to maintain compatibility with the existing codebase, we had to bring forward some legacy data elements. When submitting data to us, you ***do not need to include any of these*** - these are here for us behind the scenes because we're using the same library you are.

Another way to look at it is this is all the stuff you had to repeat on every single segment, despite that 99% of it never changed. Cutting fluff.

| Property Name     | Data Type | Description                                                                       | Required |
| ----------------- | --------- | --------------------------------------------------------------------------------- | -------- |
| EntireLineSegment | String    | Entire Legacy Flat File line (Segment) that was read in                           | No       |
| SegmentDescriptor | String    | First two digits of the Flat File Segment to tell us what it was (10, 20, etc...) | No       |
| ActionType        | String    | Action Type that the Segment was trying to perform                                | No       |
| ORINumber         | String    | ORI of the Submitting Agency                                                      | No       |
| IncidentNumber    | String    | Incident Number the Segment is associated with                                    | No       |
| ExpansionBuffer   | String    | Blank Space left for future expansion                                             | No       |
| SegmentEnd        | String    | ZZ at the end of the data                                                         | No       |
| Padding           | String    | Blank Spaces to make the line 150 Characters long.                                | No       |

<br/>