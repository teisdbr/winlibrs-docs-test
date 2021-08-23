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

## Root Validation Object
This is the primary object that is used in the JSON Validator. It contains the following properties/objects:

| Property Name   | Data Type               | Description                                                  | Required                                |
| --------------- | ----------------------- | ------------------------------------------------------------ | --------------------------------------- |
| Spec            | String                  | LIBRS Spec version that the file follows (currently 2.5)     | Yes                                     |
| Ori             | String                  | ORI of the Submitting Agency                                 | Yes                                     |
| ReportYear      | Integer                 | 4-Digit Reporting Period Year                                | Yes                                     |
| ReportMonth     | Integer                 | Reporting Period Month                                       | Yes                                     |
| AgencyName      | String                  | Descriptive Name of the Agency                               | No (Legacy DE - Not used in validation) |
| SoftwareID      | String                  | Name of the RMS Generating the Data                          | Yes                                     |
| SoftwareVersion | String                  | Version of the RMS Generating the Data                       | Yes                                     |
| ForSubmission   | Boolean                 | Boolean that tells us if you're just validating the data in the file, or if you want to actually submit it to us. | No (Assumed False if missing or NULL)   |
| ZeroReport      | Boolean                 | Boolean that tells us there's no data for this Agency for the specified Reporting Period and Year | No (Assumed False if missing or NULL)   |
| IncidentList    | List of Librs Incidents | The actual Incident Data in the form of a List of the LibrsIncident object. | Yes                                     |

___

## Librs Incident Object

The LibrsIncident object is the object that will be populated for each Incident that is being submitted. You'll notice that not all Flat File Segments are represented by child objects. This is because we have been working on simplifying the objects where we can. For instance, Segment 41 - Offender Using/Gaming is gone, and instead represented by a property in the Offender Object. 

***THIS IS SUBJECT TO CHANGE*** - Don't hold this as gospel. We will probably make more changes to this to make things simpler, like rolling in the Arrestee Statute Segment into the Arrestee, as well. 

Basically, the only things that are required are what make it an Incident - Admin, Offense, and a Victim. And we also need to know the Incident Number and if it's an insertion or a deletion, so Action Type and Incident Number are also needed. Everything else can be left out of the JSON Object if it's not relevant (EG: Property Segment 30 for an Aggravated Assault).

| Property Name          | Data Type                       | Description                                                  | Required                           |
| ---------------------- | ------------------------------- | ------------------------------------------------------------ | ---------------------------------- |
| ActionType             | String                          | Action Type for this Incident (Insert, Delete, etc...)       | Yes                                |
| IncidentNumber         | String                          | Incident Number of this Incident                             | Yes                                |
| [Admin](#admin_object) | Admin Object                    | Admin Segment (10) represented as a C# Object                | Yes                                |
| Offense                | List of Offense Objects         | List of Offense Segments (20) represented as a C# Object     | Yes                                |
| PropertySeg            | PropertySeg Object              | Property Segment (30) represented as a C# Object             | No                                 |
| PropDesc               | List of PropDesc Objects        | List of Property Description Segments (31) represented as a C# Object | No                                 |
| PropertyOffense        | List of PropertyOffense Objects | List of Property/Offense Relationship Segments (33) represented as a C# Object | No                                 |
| Offender               | List of Offender Objects        | List of Offender Segments (40) represented as a C# Object    | No                                 |
| Victim                 | List of Victim Objects          | List of Victim Segments (50) represented as a C# Object      | Yes                                |
| Arrestee               | List of Arrestee Objects        | List of Arrestee Segments (60) represented as a C# Object    | No                                 |
| ArrArm                 | List of ArrArm Objects          | List of Arrestee Armed With Segments (61) represented as a C# Object | No                                 |
| ArrStatute             | List of ArrStatute Objects      | List of Arrestee Statute Segments (62) represented as a C# Object | No                                 |
| Errors                 | List of Error Objects           | List of LIBRS Errors represented as a C# Object              | No (Returned back in API Response) |
| Warnings               | List of Warning Objects         | List of LIBRS Warnings represented as a C# Object            | No (Returned back in API Response) |



### Admin Object<a href="admin_object"/>

This is a C# Object that represents the existing Administrative Segment (10) from the Flat File. Some properties have been pulled out into the Root Validation Object (RVO) and thus don't need to be repeated here or in other segments. 

| Property Name        | Data Type | Description                                                  | Required                                                  |
| -------------------- | --------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| Location             | String    | 12-Character String of the Incident Location Type (DE 9)     | No (Defaults to blank spaces)                             |
| StationID            | String    | 6-Character String of the Agency's Station ID (DE L54)       | No (Defaults to blank spaces)                             |
| IncidentDate         | DateTime  | **UTC** Formatted Datetime of the Incident (DE 3)            | Yes                                                       |
| IsReportingDate      | Boolean   | Boolean that replaces the R Modifier in DE 3                 | No (Defaults False)                                       |
| ClearedExceptionally | String    | 1-Character String to represent the Exceptional Clearance Status of the Incident (DE 4) | No (Defaults to "N" for None)                             |
| ExcpClearDate        | DateTime  | UTC Formatted Datetime of the Exceptional Clearance Date (DE 5) | If ClearedExceptionally is not N, then Yes. Otherwise No. |



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

___



### Offense Object

This is a C# Object that represents the existing Offense Segment (20) from the Flat File. You can include as many as required in the form of an array of these objects. 

| Property Name       | Data Type       | Description                                                  | Required                                                     |
| ------------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| OffenseSequenceNum  | String          | 3-Digit Number to Uniquely Identify the Offense (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE L6) | Yes                                                          |
| AttemptedCompleted  | String          | 1-Digit Character (A for Attempted, or C for Completed) that depicts if the offense was Attempted or fully committed (Completed) (DE 7) | Yes                                                          |
| OffConnecttoVic     | String          | 3-Digit Number that links the Offense to a single Victim via the Victim's Sequence Number (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 24) | Yes                                                          |
| LocationType        | String          | 2-Digit Number that describes the Location in which the Offense took place (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 9) | No (Defaults to blank spaces)                                |
| Premises            | String          | 2-Digit Number that describes the Number of Premises an Offender Entered (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 10) | Yes if the Offense is Burglary and Location Type is 14 or 19, otherwise, no |
| MethodOfEntry       | String          | 1-Digit Character (F for Force, or N for No Force) that describes how the Offender entered a location in case of a Burglary. (DE 11) | Yes if the Offense is Burglary, otherwise, no                |
| CriminalActivity    | List of Strings | List (up to three) 1-Digit Characters to represent three types of Criminal Activity/Gang Information involved in an Offense (DE 12) | Yes                                                          |
| Weapons             | List of Weapons | List of the Weapons Object, which contains a property for the weapon type, if it was an automatic firearm, if a firearm was stolen, and if a firearm was discharged in committing the offense (New DE) | No (Defaults to Empty List)                                  |
| CargoTheft          | Boolean         | Boolean value to indicate whether or not an Offense involved cargo theft. If any are true, the Incident-Level DE for the NIBRS Report will also reflect True, but for Louisiana we want to know about the individual Offense. | No (Defaults to False)                                       |
| AgencyAssignedNibrs | String          | 3-Digit String of the NIBRS Code of the Offense at hand. (DE N6) | Yes                                                          |
| LrsNumber           | String          | Up to 12-Digits of Characters to represent the Louisiana Revised Statute (LRS) Code of the Offense at hand (DE 6) | Yes                                                          |



**Example**

```json
"offense": [
                {
                    "offenseSeqNum": "001",
                    "attemptedCompleted": "C",
                    "offConnecttoVic": "001",
                    "locationType": "20",
                    "premises": "  ",
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

___



### Property Object

This is a C# Object that represents the existing Property Segment (30) from the Flat File. This Object is optional if you have no information to give us (EG: The only offense is an Aggravated Assault and has nothing to do with stolen vehicles). If you don't include it, we fill in a blank object automatically, so the number of stolen and recovered vehicles will be the same as if they were left as blank spaces in the Flat File.

This may go away in the future and be tallied based on the Property Descriptions that are given to us, since all it contains is the number of stolen and recovered vehicles. 

| Property Name          | Data Type | Description                                                  | Required |
| ---------------------- | --------- | ------------------------------------------------------------ | -------- |
| NumOfStolenVehicles    | String    | 2-Digit Number to define the number of vehicles that were stolen in an Incident. (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 18) | No       |
| NumOfRecoveredVehicles | String    | 2-Digit Number to define the number of vehicles that were stolen in an Incident. (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 19) | No       |



**Example**

```json
"propertySeg": {
                "numOfStolenVehicles": "01",
                "numOfRecoveredVehicles": "01"
            }
```

___



### Property Description Object

This is a C# Object that represents the existing Property Description Segment (31) from the Flat File. You can include as many as you like as an array of this object. 

| Property Name       | Data Type | Description                                                  | Required                      |
| ------------------- | --------- | ------------------------------------------------------------ | ----------------------------- |
| PropertySeqNum      | String    | 3-Digit Number to uniquely identify the Property that's being described (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE P1) | Yes                           |
| PropertyLossType    | String    | 1-Digit Number to describe the Loss Type of the Property that is being Described.  (Currently a String, but will probably become and Integer in the future) (DE 14) | Yes                           |
| PropertyDescription | String    | 2-Digit Number that's used to describe what the actual property is (Currently Left Padded with Zeros, but will probably become an Integer in the future) (DE 15) | Yes                           |
| PropertyValue       | String    | 9-Digit, Left Padded Number that's used to identify the value of the Property that's being described (Will probably become an Integer in the future) (DE 16) | Yes                           |
| DateRecovered       | Datetime  | **UTC** Datetime of when the Property was Recovered (DE 17)  | No                            |
| SuspectedDrugType   | String    | 2-Digit String that is used to Identify the kind of drug the Property is if its Description is "Drug" (DE 20) | No (Defaults to blank spaces) |
| EstimatedDrugQty    | String    | 13 Digit Decimal Number (10 leading numbers, 3 trailing the decimal) to represent the quantity of a drug based on the selected Measurement Type (Currently Left Padded with Zeros, but will probably become a Decimal in the future) (DE 21) | No (Defaults to blank spaces) |
| TypeDrugMeas        | String    | 2-Digit String of the shortcode for the measurement type (DE 22) | No (Defaults to blank spaces) |



**Example**

```json
"propDesc": [
                {
                    "propertySeqNum": "001",
                    "propertyLossType": "5",
                    "propertyDescription": "03",
                    "propertyValue": "000010000",
                    "dateRecovered": "2020-07-31T05:00:00",
                    "suspectedDrugType": "  ",
                    "estimatedDrugQty": "             ",
                    "typeDrugMeas": "  "
                },
                {
                    "propertySeqNum": "002",
                    "propertyLossType": "6",
                    "propertyDescription": "10",
                    "propertyValue": "         ",
                    "dateRecovered": null,
                    "suspectedDrugType": "L ",
                    "estimatedDrugQty": "000000002.000",
                    "typeDrugMeas": "GM"
                }
    ]
```

___



### Property Offense Object

This is a C# Object that represents the existing Property Offense Relationship Segment (33) from the Flat File. You can include as many as you like as an array of this object. It's just a simple pair of Property Sequence Numbers and Offense Numbers so we can accurately link together the Properties to their associated Offense(s).

| Property Name          | Data Type | Description                                                  | Required |
| ---------------------- | --------- | ------------------------------------------------------------ | -------- |
| PropertySequenceNumber | String    | 3-Digit Number to identify the Property we want to relate to an Offense (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE P1R) | Yes      |
| OffenseSequenceNumber  | String    | 3-Digit Number to uniquely identify the Offense that the Property goes with (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE L6R) | Yes      |



**Example**

```json
"propertyOffense": [
                {
                    "propertySequenceNumber": "001",
                    "offenseSequenceNumber": "002"
                },
                {
                    "propertySequenceNumber": "002",
                    "offenseSequenceNumber": "001"
                }
            ]
```

___



### Offender Object

This is a C# Object that represents the existing Offender Segment (40) from the Flat File. You can include as many as you like as an array of this object. It also wraps the Offender Using Segment (41) into it, so that Segment/Object doesn't exist. 

| Property Name  | Data Type       | Description                                                  | Required |
| -------------- | --------------- | ------------------------------------------------------------ | -------- |
| OffenderSeqNum | String          | 3-Digit Number to uniquely identify the Offender that's being specified (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 36) | Yes      |
| Age            | String          | 3-Digit String to represent the Offender's Age. First two characters are a 2-Digit Representation of the Age and the third is either a blank or "E" | Yes      |
| Dob            | DateTime        | **UTC** Datetime of the Offender's Birthdate                 | No       |
| Sex            | String          | 1-Digit Character to represent the biological sex of the Offender M, F, or U | Yes      |
| Race           | String          | 1-Digit Character to represent the race of the Offender      | Yes      |
| Gender         | String          | 3-Digit Character String to represent the Gender Identity of the Offender. Note, we don't actually have any requirements for this right now, but it is a thing. | No       |
| BiasMotivation | String          | 2-Digit Number to represent the Bias/Motivation Type (Currently a string, but will become an integer later) | Yes      |
| Ethnicity      | String          | 1-Digit Character to represent the Ethnicity of the Offender | Yes      |
| UsingGaming    | List of Strings | List of 1-Digit Strings to represent the Using/Gaming Motivation Types of the Offender | Yes      |



**Example**

```json
"offender": [
                {
                    "offenderSeqNum": "001",
                    "age": "37 ",
                    "dob": null,
                    "sex": "M",
                    "race": "B",
                    "gender": "   ",
                    "biasMotivation": "88",
                    "ethnicity": "U",
                    "usingGaming": [
                        "N"
                    ]
                }
            ]
```



___



### Victim Object

This is a C# Object that represents the existing Offender Segment (40) from the Flat File. You can include as many as you like as an array of this object. Please note that it also includes the Victim Injury Segment (51) and the Victim/Offender Relationship (52) in it, so those are no longer separate Segments/Objects to be reported. 



| Property Name               | Data Type              | Description                                                  | Required                               |
| --------------------------- | ---------------------- | ------------------------------------------------------------ | -------------------------------------- |
| VictimSeqNum                | String                 | 3-Digit Number to uniquely identify the Victim that's being specified (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 36) | Yes                                    |
| VictimType                  | String                 | 1-Digit Character to represent the Type of Victim being described |                                        |
| Age                         | String                 | 3-Digit String to represent the Victim's Age. First two characters are a 2-Digit Representation of the Age and the third is either a blank or "E" | Yes                                    |
| Dob                         | DateTime               | **UTC** Datetime of the Victim's Birthdate                   | No                                     |
| Sex                         | String                 | 1-Digit Character to represent the Biological Sex of the Victim - M, F, or U | Yes                                    |
| Race                        | String                 | 1-Digit Character to represent the Race of the Victim        | Yes                                    |
| Gender                      | String                 | 3-Digit Character String to represent the Gender Identity of the Victim. Note, we don't actually have any requirements for this right now, but it is a thing. | No                                     |
| Ethnicity                   | String                 | 1-Digit Character to represent the Ethnicity of the Victim   | Yes                                    |
| ResidentStatus              | String                 | 1-Digit Character to represent the Permanent Resident/Citizenship status of the Victim. | No                                     |
| AggravatedAssault           | List of Strings        | List of up to two, 2-Digit Strings (Will become an int later) to describe the Aggravated Assault Circumstances, Negligent Manslaughter Circumstances, or Justifiable Homicide Circumstances (Dependent on the NIBRS Code of the Offense the Victim is associated with). | 13A, 09A, 09B, & 09C                   |
| AdditionalHomicide          | String                 | 1-Digit Character to further describe the circumstances surrounding an 09C - Justifiable Homicide. | If Offense related to Victim is 09C    |
| PrecipitatingOffense        | String                 | 3-Digit NIBRS Code of the Offense that the Victim was committing when an 09C - Justifiable Homicide occurred. Note that the Victim of an 09C is the Offender of another Offense. This offense may or may not be reported alongside the 09C, so this DE is intended to capture that in case it isn't. | If Offense related to Victim is 09C    |
| OfficerActivityCircumstance | String                 | 2-Digit Number (will become an int later) to describe the actions/activities an Officer was performing when they became the Victim of an Offense. | If Victim is Type "L"                  |
| OfficerAssignmentType       | String                 | 1-Digit Character to describe the role the Officer that was the Victim of an Offense was performing/a part of when the Offense occurred. | If Victim is Type "L"                  |
| OfficerOri                  | String                 | 9-Digit String of the Victim Officer's ORI Number            | If Victim is Type "L"                  |
| InjuryType                  | String                 | 1-Digit Character to represent the Injury Type of the Victim | For Crimes Against Person              |
| RelatedOffenders            | List of VicOff Objects | Object that contains the Victim Sequence Number, Offender Sequence Number, and their relationship. This will get revised to only be the Offender Number and Relationship. | For Crimes Against Person and Property |



**Example**

```json
"victim": [
                {
                    "officerActivity": null,
                    "victimSeqNum": "001",
                    "victimType": "I",
                    "age": "33 ",
                    "dob": null,
                    "sex": "F",
                    "gender": "   ",
                    "race": "B",
                    "ethnicity": "U",
                    "residentStatus": "R",
                    "aggravatedAssault": [
                        "10"
                    ],
                    "additionalHomicide": " ",
                    "precipitatingOffense": "   ",
                    "officerActivityCircumstance": "  ",
                    "officerAssignmentType": " ",
                    "officerOri": "         ",
                    "injuryType": " ",
                    "relatedOffenders": [
                        {
                            "victimSeqNum": "001",
                            "offenderNumber": "000",
                            "relationship": "RU"
                        }
                    ]
                }
```

___



### Arrestee Object

This is a C# Object that represents the existing Arrestee Segment (60) from the Flat File. You can include as many as you like as an array of this object.



| Property Name             | Data Type | Description                                                  | Required                     |
| ------------------------- | --------- | ------------------------------------------------------------ | ---------------------------- |
| ArrestSeqNum              | String    | 3-Digit Number to uniquely identify the Arrestee that's being specified (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 36) | Yes                          |
| ArrestNumber              | String    | 12-Digit Alpha/Numeric String of Characters that uniquely identifies the Arrest in the Agency's RMS | Yes                          |
| ArrTransactionNumber      | String    | 15-Digit Alpha/Numeric String of Characters that uniquely Identifies the Arrestee in AFIS (DE L55) | Yes                          |
| ArresteeName              | String    | 20-Digit Character String of the Arrestee's Name. Should be in the format of (Last)(Suffix),(First)(Middle) | No                           |
| ArrestDate                | DateTime  | **UTC** Datetime of the Arrest                               | Yes                          |
| ArrestType                | String    | 1-Digit Character to describe the nature of how the Arrest was Initiated - O, S, or T. | Yes                          |
| MultipleArresteeIndicator | String    | 1-Digit Character that indicates if this Arrest should be counted towards the number of *people* arrested by an Agency. Sometimes an Offender will appear multiple times in the same Incident, or across multiple Incidents. Their arrest for one of these Offenses will subsequently "clear" the others, but since they were only physically arrested one time, the MAI should be used to denote that the Arrest record shouldn't affect the number of *people* the agency has arrested, only the number of Offenses cleared by arrest. | Yes                          |
| Age                       | String    | 3-Digit String to represent the Arrestee's Age. First two characters are a 2-Digit Representation of the Age and the third is either a blank or "E" | Yes                          |
| Dob                       | DateTime  | **UTC** Datetime of the Arrestee's Birthdate                 | No                           |
| Sex                       | String    | 1-Digit Character to represent the Biological Sex of the Arrestee - M, F, or U | Yes                          |
| Race                      | String    | 1-Digit Character to represent the Race of the Arrestee      | Yes                          |
| Gender                    | String    | 3-Digit Character String to represent the Gender Identity of the Arrestee. Note, we don't actually have any requirements for this right now, but it is a thing. | No                           |
| Ethnicity                 | String    | 1-Digit Character to represent the Ethnicity of the Arrestee | Yes                          |
| ResidentStatus            | String    | 1-Digit Character to represent the Permanent Resident/Citizenship status of the Arrestee. | No                           |
| DispositionUnder17        | String    | 1-Digit Character used to describe how an Arrestee 17 years of age or younger was handled by the Agency. | If Arrestee is 17 or younger |



**Example**

```json
"arrestee": [
                {
                    "arrestSeqNum": "001",
                    "arrestNumber": "     8675309",
                    "arrTransactionNumber": "               ",
                    "arresteeName": "DOE, JOHNATHAN Q",
                    "arrestDate": "2020-07-01T00:00:00Z",
                    "arrestType": "O",
                    "multipleArresteeIndicator": "N",
                    "age": "37 ",
                    "dob": "1980-01-31T00:00:00Z",
                    "sex": "M",
                    "gender": "   ",
                    "race": "W",
                    "ethnicity": "U",
                    "residentStatus": "U",
                    "dispositionUnder17": " "
                }
            ]
```

___



### Arrestee  Armed Object

This is a C# Object that represents the existing Arrestee Armed Segment (61) from the Flat File. This will end up getting rolled into the Arrestee Object, but for now it is separate.



| Property Name   | Data Type | Description                                                  | Required |
| --------------- | --------- | ------------------------------------------------------------ | -------- |
| ArrestSeqNum    | String    | 3-Digit Number to uniquely identify the Arrestee that's being specified (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 36) | Yes      |
| ArrestArmedWith | Weapon    | Weapon Object (Same as in the Offense Object)                | Yes      |



**Example**

```json
"arrArm": [
    "arrestSeqNum": "001",
    "weapons":
   		   [
                {
                    "weaponForce": "40",
                    "automatic": false,
                    "stolenFirearm": null,
                    "dischargedFirearm": null
                }
            ]
```

___



### Arrestee  Statute Object

This is a C# Object that represents the existing Arrestee Statute Segment (62) from the Flat File. This will end up getting rolled into the Arrestee Object, but for now it is separate.



| Property Name       | Data Type | Description                                                  | Required |
| ------------------- | --------- | ------------------------------------------------------------ | -------- |
| ArrestSeqNum        | String    | 3-Digit Number to uniquely identify the Arrestee that's being specified (Currently Left Padded with Zeros, but will probably become just an Integer in the future) (DE 36) | Yes      |
| ArrestConToOffense  | String    | 15-Character String that combines the Offense Sequence Number with the Incident Number EG XXXYY-YYYYYY-YY, where XXX is the Offense Sequence Number and YY-Y... is the Incident Number | Yes      |
| AgencyAssignedNibrs | String    | 3-Digit NIBRS Code of the Offense that the Arrestee was Arrested for. | Yes      |
| LrsNumber           | String    | 12-Digit LRS Code (Louisiana Revised Statute Code) that the Arrestee was Arrested for. |          |



**Example**

```json
"arrStatute": [
                {
                    "arrestSeqNum": "001",
                    "arrestConToOffense": "00120-000000-01"
                    "agencyAssignedNibrs": "240",
                    "lrsNumber": "14:67.26"
                },
                {
                    "arrestSeqNum": "001",
                    "arrestConToOffense": "00220-000000-01",
                    "agencyAssignedNibrs": "35A",
                    "lrsNumber": "40:967"
                }
            ]
```

___





## Legacy LIBRS Values

In order to maintain compatibility with the existing codebase, we had to bring forward some legacy data elements. When submitting data to us, you ***do not need to include any of these*** - these are here for us behind the scenes because we're using the same library you are. 

Another way to look at it is this is all the stuff you had to repeat on every single segment, despite that 99% of it never changed. Cutting fluff.

| Property Name     | Data Type | Description                                                  | Required |
| ----------------- | --------- | ------------------------------------------------------------ | -------- |
| EntireLineSegment | String    | Entire Legacy Flat File line (Segment) that was read in      | No       |
| SegmentDescriptor | String    | First two digits of the Flat File Segment to tell us what it was (10, 20, etc...) | No       |
| ActionType        | String    | Action Type that the Segment was trying to perform           | No       |
| ORINumber         | String    | ORI of the Submitting Agency                                 | No       |
| IncidentNumber    | String    | Incident Number the Segment is associated with               | No       |
| ExpansionBuffer   | String    | Blank Space left for future expansion                        | No       |
| SegmentEnd        | String    | ZZ at the end of the data                                    | No       |
| Padding           | String    | Blank Spaces to make the line 150 Characters long.           | No       |

