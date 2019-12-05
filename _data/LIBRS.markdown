**Incident Date/Hour (3)**

**Examples:**

Example Number | Description
:-------------:|:-----------
1 | If a robbery occurred at 9:30 p.m. on July 2, 2014, the entry should be '07022014G21' (where 'G' is a blank).
2 | If a kidnaping started at 11:30 p.m. on November 1, 2014, and ended at 6:00 p.m., on November 16, 2014, the entry should be '11012014G23' (where 'G' is a blank).
3 | If the date and hour of the incident are unknown, but the date of the report was March 15, 2014, the entry should be '03152014RGG' (where 'G' is a blank).
4 | If a burglary occurred sometime between 11:15 A.M. on June 24, 2014, and 4:30 P.M. on June 26, 2014, the entry should be 06242014G11 (where "G" is a blank).
5 | If a rape occurred on November 15, 2013, but was not reported until January 15, 2014, this incident would reject if your agency's "Base Date" is December 1, 2013. This incident would not have been reported on your Return A (or whatever other forms would be applicable) for the month of November or for the month of December of 2013.<br><br>If your agency submits this incident to LIBRS with an incident date of 11/15/2013, it would REJECT. It would reject because the Incident Date is prior to the date your agency's data is being kept by the LIBRS and NIBRS databases.<br><br>Since this incident CANNOT be accepted into LIBRS and has not been reported to UCR summary, an adjustment would have to be made on UCR Summary forms that apply.

Cleared Exceptionally (4)
-------------------------

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error 11001\
> **
>
> 2\) MUST be a valid code. **Error 11004\
> **

3\) CANNOT be \"N\" (Not Applicable) if Exceptional Clearance Date (5) is
entered. **Error 11053**

> 4\) When a value other than \"N\" (Not Applicable) is entered, there can
> be NO Arrestee Segments associated with the Incident. **Error 10071**
>
> 5\) Administrative Segments (10) submitted with an Action Type of \"M\"
> (Modify) must have an \"N\" (Not Applicable) in Cleared Exceptionally
> (4) indicator when Arrestees are included as part of the original
> Incident Report. **Error 11064**
>
> **6) Administrative Segment (10) submitted with an Action Type of
> \"W\" (Time Window Submission) CANNOT contain an \"N\" (Not
> Applicable) in Cleared Exceptionally (4). Error 11054**


**Cleared Exceptionally (4)**

**Allowed Entries:** Enter one] code per incident.

|   | Cleared Exceptionally Indicators|   
|:-:|:--------------------------------|
  A | Death of Offender
  B | Prosecution Declined (by the prosecutor other than lack of-probable cause)
  C | Extradition Denied
  D | Victim Refused to Cooperate (in the prosecution)
  E | Juvenile/No Custody (the handling of a juvenile without taking him/her into custody, but rather by oral or written notice given to the parents or legal guardian in a case involving a minor offense)
  O | Other (Administrative Closing of a case\--this does not clear the incident for LIBRS\--reported to NIBRS as a "N")
  **N** | **Not Applicable (Not Cleared Exceptionally)**

**Example:** A kidnapper holding a hostage killed himself when the
building in which he barricaded himself was surrounded by police. The
kidnaping is cleared exceptionally under, \"Death of the Offender\".

### Exceptional Cleared Date (5)

**Data Characteristics**: 8 Character Date

**Format:** MMDDYYYY

**Requirements:**

> 1\) The clearance date CANNOT be earlier than the incident date. **Error
> 11055\
> **

2\) MUST be present if incident was cleared exceptionally with a data
value of "A", "B", "C", "D", "E", or "O" in Cleared Exceptionally (4)).
**Error 11056\
**

> 3\) Each component of the date must be valid: months must be 0-12, days
> must be 01-31, and year must include the century (that is, 19xx, 20xx).
> In addition, days CANNOT exceed maximum for the month (for example, June
> CANNOT have 31 days). The Exceptional Clearance Date CANNOT be greater
> than that entered within the Reporting Period (C4). For example, if the
> Reporting Period is 062014 (that is, June 2014), then the Exceptional
> Clearance Date CANNOT contain any date 07/01/2014 or greater. **Error
> 11005\
> **
>
> 4\) Administrative Segments (10) submitted with an Action Type of \"W\"
> (Time-Window Submission) must contain Cleared Exceptionally (4) and
> Exceptional Clearance Date (5). Both data elements must be present to be
> a valid submission. **Error 11057**

5\) Administrative Segments (10) submitted with an Action Type of \"W\"
(Time-Window Submission) CANNOT have an Exceptional Clearance Date (5)
earlier than the \"Time-Window\" Base Date. This is also true for any
\"M\" (Modify) submissions subsequent to a previously submitted
Time-Window Submission (Action Type of "W").\
**Error 11020**

> 6\) Administrative Segments (10) submitted with an Action Type of \"M\"
> (Modify) and an Exceptional Clearance (4) indicator of \"N\" (Not
> Applicable) CANNOT have an entry in Exceptional Clearance Date (5).
> **Error 11066**
>
> 7\) Administrative Segments (10) submitted with an Action Type of \"M\"
> (Modify) for a previously submitted Time-Window Submission (Action Type
> of "W") must have an Exceptional Clearance Date (5). **Error 11067\
> **

8\) Administrative Segments (10) submitted with an Action Type of \"W\"
(Time-Window Submission) or \"M\" (Modify) CANNOT have an Exceptional
Clearance Date (5) earlier than the date the ORI was certified for LIBRS
submission. **Error 11074**

Exceptional Cleared Date (5)
----------------------------

**Example:**

The incident was cleared on the books of the reporting agency on May 27,
1.    It was entered into the local computer on June 6, 2014, and was
submitted to LIBRS sometime in July of 2014. The date \"05272014\"
should be entered into this data element.

**\
**

### Offense Sequence Number (L6)

**Data Characteristics:** 3 Character Numeric

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error 12001\
> **
>
> 2\) MUST be numeric entry (001 through 999) with zero left-fill. Offense
> Sequence Number (L6) distinguishes one offense from another. **Error
> 15002\
> **
>
> 3\) MUST be unique \-- CANNOT be duplicated. **Error 25001**

Offense Sequence Number Reference (L6R)
---------------------------------------

**Data Characteristics:** 3 Character Numeric

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank.\
> **Error 90021 \*\*\*New Error Message\*\*\*\
> **
>
> 2\) MUST be numeric entry (001 through 999) with zero left-fill.\
> **Error 90022\*\*\*New Error Message\*\*\*\
> **
>
> 3\) MUST match the Offense Sequence Number (L6) of one of the Offense
> segments submitted in the corresponding incident.\
> **Error 90024 \*\*\*New Error Message\*\*\***

**\
**

### Louisiana Revised Statute (6)

**Data Characteristics**: 12 Character Alpha

**Format**: TT:SSSS.S/P-**I**

+-----------------------------------+-----------------------------------+
| Louisiana Revised Statute Format  |                                   |
+===================================+===================================+
| TT                                | Title                             |
+-----------------------------------+-----------------------------------+
| SSSS.S                            | Section                           |
+-----------------------------------+-----------------------------------+
| **PPP/I**                         | **Subpart, *[or]{.underline}***   |
|                                   |                                   |
|                                   | **Subpart with Qualifier,         |
|                                   | *[or]{.underline}***              |
|                                   |                                   |
|                                   | **Qualifier, *[or]{.underline}*** |
|                                   |                                   |
|                                   | **Juvenile Qualifier, and**       |
|                                   |                                   |
|                                   | **An Inchoate Modifier, if        |
|                                   | applicable, would be indicated by |
|                                   | a dash with a data value behind   |
|                                   | the LRS Code that defines the     |
|                                   | offense.**                        |
+-----------------------------------+-----------------------------------+

**Requirements:**

> 1\) MUST be present\--CANNOT be Blank (G). **Error 12001\
> **
>
> 2\) MUST be a valid code on Master LIBRS/LRS Code Table. **Error 12004**

**Louisiana Revised Statute (6)**

**Examples:**

\(1) When 14:42 is submitted as a Louisiana Revised Statute LRS (6),
LIBRS will need Qualifiers to determine if the offense should be
classified as a forcible rape or as a forcible sodomy. If the offense is
submitted as a **14:42/V**, this would translate to a forcible rape
offense, whereas if this offense is submitted as a **14:42/A** this
would translate to a forcible sodomy offense. Without any Qualifiers,
LIBRS has no way to determine which offense this LRS should be reported
as, and the entire incident would be rejected. The agency will receive
the following error message: *\"This LRS Code must be submitted with a
Qualifier to define offense applicable.\"*

\(2) If an incident involved a robbery (14:64) and a forcible rape
(**14:42.1/V**), two LRS offenses should be submitted. The 14:64 does
not require any Qualifier, but the 14:42.1 does require a Qualifier.

\(3) If two females were raped in an incident, two LRS offenses should be
submitted for rape: one LRS should be reported for each victim \-- in
this case, both LRS codes should be submitted as14:42.1/V for Victim 001
and **14:42.1/V** for Victim 002)

**Refer to the Master LIBRS/LRS Code Table to determine:\
1) LRS Codes that are accepted\
2) What offense the LRS code was assigned: NIBRS Code determines offense
to be reported.\
3) Index Class assigned to each LRS\
4) IBR and NIBRS rankings.**

**To determine definitions of Qualifiers see the list at the end of this
section.**

**Allowed Entries for Subparts:**

Some LRS codes must be submitted with a Subpart. Each code may be a
different offense when submitted to LIBRS. For instance 14:107/1 would
be reported to the FBI as Drunkenness NIBRS 90E) and 14:107/9 would be
reported to the FBI as (Prostitution NIBRS 40A).

The following LRS codes MUST have a Subpart, and will be rejected if not
submitted with a Subpart. The following LRS codes with Subparts are not
shown in the Master LIBRS/LRS Code table.

> 14:59 14:94 14:103 14:107 14:130.1

The LRS codes listed below [require a Subpart]{.underline} to determine
the proper offense to be submitted to LIBRS.

> 14:59/A1 14:59/A2 14:59/A3 14:59/A4 14:59/A5 14:59/A6
>
> 14:59/A7 14:59/A8 14:59/A9 14:59/A10 14:94/E 14:94/F

**Louisiana Revised Statute (6)**

> 14:103/A1 14:103/A2 14:103/A3 14:103/A4 14:103/A5 14:103/A6
>
> 14:107/1 14:107/2 14:107/3 14:107/4 14:107/5 14:107/6
>
> 14:107/7 14:107/8 14:107/9 14:130.1/A 27:98/B 27:98/C
>
> 27:100/A 27:100/B 27:264/A 27:264/B

**Allowed Entries for Subparts, and Subparts with Qualifiers:**

LRS Codes may have Subparts, with some requiring *Subparts with
Qualifiers*. Each code may be a different offense when submitted to
LIBRS. For instance, 14:129/A1 would be reported to the FBI as
Intimidation (NIBRS 13C) and 14:129/A2F would be reported to the FBI as
an Aggravated Assault (NIBRS 13A).

The following LRS codes WILL BE REJECTED IF NOT submitted with a subpart
or subpart with a Qualifier and have been deleted from the Master
LIBRS/LRS Code Table.

> 14:129 14:228 40:971

**Louisiana Revised Statute (6)**

The LRS codes listed on the following page **REQUIRE** a *Subpart* or a
*Subpart with a Qualifier* to determine the proper offense to be
submitted to LIBRS.

> **14:108/B1BF 14:108/B1B** 14:129/A1 14:129/A2F\
> 14:129/A2T 14:228/A1 14:228/A2 14:228/A3
>
> 14:228/A4 14:228/A5 14:228/A6 14:228/A6X\
> 14:228/A6Y 14:228/A7 **27:309/BR 27:309/B\
> 27:309/C** 40:971/A 40:971/B1A 40:971/B1BX\
> 40:971/B1B 40:971/B1C 40:971/B1D 40:971/B1E\
> 40:971/B1F 40:971/B1G 40:971/B1H 40:971/C

**Allowed Entries for Qualifiers:**

Some LRS codes must be submitted with a *Qualifier* in order to
determine the proper offense to be reported. For instance, 14:42/V would
be reported to the FBI as a Forcible Rape (11A) and 14:42/A would be a
Forcible Sodomy (11B).

The following LRS codes will be rejected if not submitted with a
Qualifier and have been deleted from the Master LIBRS/LRS Code Table.

14:42 14:42.1 14:43 14:43.1 14:43.2 14:51\
14:52 14:53 14:54 14:62 14:63 14:63.3\
14:87.2 14:87.5 14:90 14:90.2 14:122 14:130.1\
14:205 14:404

The LRS codes listed below **require a Qualifier** to determine the
proper offenses to be submitted to LIBRS.

> 14:42/A 14:42/V 14:42.1/A 14:42.1/V 14:43/A 14:43/V\
> 14:43.1/N 14:43.1/P 14:43.2/N 14:43.2/P 14:51/H 14:51/U\
> 14:52.1/H 14:52.1/U 14:52/H 14:52/U 14:53/H 14:53/U\
> 14:54/H 14:54/U 14:62/I 14:62/M 14:62/Z 14:63/I\
> 14:63/M 14:63.3/I 14:63.3/M 14:87.2/F 14:87.2/L 14:87.2/W\
> 14:87.5/F 14:87.5/L 14:87.5/W 14:90/G 14:90/R 14:90.2/G
>
> **Louisiana Revised Statute (6)**
>
> 14:90.2/R 14:122/F 14:122/T 14:130.1/B 14:130.1/F 14:130.1/I\
> 14:130.1/T 14:130.1/X 14:130.1/Y 14:205/H 14:205/U 14:404/J\
> 14:404/Q

**Example:**

\(1) 14:90/G \-- "G" refers to a Qualifier (see Qualifier List) and would
be reported to the FBI as the offense of Betting/Wagering (NIBRS 39A).

\(2) 14:51/U \-- "U" refers to a Qualifier (see Qualifier List) and would
be reported to the FBI as the offense of Arson (NIBRS 200).

**Allowed Entries for With or Without Qualifiers:**

**Qualifiers:** Some LRS codes can be submitted with or without a
Qualifier. For instance, 14:44.1 would be reported to the FBI as a
Kidnaping (NIBRS 100) and 14:44.1/N would be Forcible Fondling (NIBRS
11D).

LRS codes listed below will be accepted with or without a Qualifier or a
hard code to determine the proper offense code to be reported to LIBRS.

> 14:30.1 14:30.1/D 14:32.1 14:32.1/AA 14:44.1 14:44.1/A\
> 14:44.1/N 14:44.1/O 14:44.1/P 14:44.1/V 14:44.2 **14:60\
> 14:60/I** 14:65.1 14:65.1/F 14:67 14:67/B 14:67/C\
> 14:67/E 14:67/K 14:67/S 14:67/Z **14:70.4 14:70.4/FR\
> 14:70.4/X 14:70.5 14:70.5/FR** 14:93 14:93/F 14:107.1\
> 14:107.1/F 14:129.1 14:129.1/F 14:129.1/T 14:133.1 14:133.1/F\
> 14:133.1/T

**Warning Messages** will be returned for the following LRS codes:

> **14:30.1** [with no Qualifier]{.underline} will be reported to the
> FBI as Murder and Non-negligent Homicide (NIBRS 09A), and the
> reporting agency will receive the following Warning message:\
> \"WARNING \-- This LRS submitted without a Qualifier will be reported
> as Murder and Non-negligent Homicide (09A)." If this is not the
> correct offense, resubmit this LRS code with a Qualifier. **Warning
> 22125**)

**Louisiana Revised Statute (6)**

> **14:32.1** [with no Qualifier]{.underline} will be reported to the
> FBI as Driving Under the Influence (NIBRS 90D), and the reporting
> agency will receive the following Warning message:\
> \"WARNING \-- This LRS submitted without a Qualifier will be reported
> as Driving Under the Influence (90D)." If this is not the correct
> offense, resubmit this LRS code with a Qualifier. **Warning 22025**
>
> **14:44.1** [ with no Qualifier]{.underline} will be reported to the
> FBI as Kidnaping (NIBRS 100). The reporting agency will receive the
> following Warning message:\
> \"WARNING \-- This LRS submitted without a Qualifier will be reported
> as Kidnaping (100)." If this is not the correct offense, resubmit this
> LRS code with a Qualifier. **Warning 22030\
> **
>
> **14:60** [with no Qualifier]{.underline} **will be reported to the
> FBI as a Robbery (NIBRS 120). The reporting agency will receive the
> following Warning message:\
> "WARNING --- This LRS submitted without a Qualifier will be reported
> as a Robbery (120)." If this is not the correct offense resubmit this
> LRS code with a Qualifier. Warning 22130**
>
> **14:65.1** [with no Qualifier]{.underline} will be reported to the
> FBI as a Purse Snatching (NIBRS 23B). **The reporting agency will
> receive the following Warning message:\
> **\"WARNING \-\-- This LRS submitted without a Qualifier will be
> reported as Purse-Snatching (23B).\" If this is not the correct
> offense, resubmit this LRS code with a Qualifier. **Warning 22035**
>
> **14:70.4** [with no Qualifier]{.underline} will **be reported to the
> FBI as a Credit Card/Automatic Teller Machine Fraud (NIBRS 26B). The
> reporting agency will receive the following Warning message:\
> "WARNING --- This LRS submitted without a Qualifier will be reported
> as Credit Card/Automatic Teller Machine Fraud (26B)." If this is not
> the correct offense resubmit this LRS code with a Qualifier. Warning
> 22135**
>
> **14:70.5** [with no Qualifier]{.underline} will **be reported to the
> FBI as Bribery (NIBRS 510). The reporting agency will receive the
> following Warning message:\
> "WARNING --- This LRS submitted without a Qualifier will be reported
> as Bribery (510)." If this is not the correct offense resubmit this
> LRS code with a Qualifier. Warning 22140\
> **
>
> **14:93** [with no Qualifier]{.underline} will be reported to the FBI
> as a Family Offense Nonviolent (NIBRS 90F). The reporting agency will
> receive the following Warning message:\
> \"WARNING \-\-- This LRS submitted without a Qualifier will be
> reported as Family Offense Nonviolent (90F)." If this is not the
> correct offense, resubmit this LRS code with a Qualifier. **Warning
> 22040\
> **
>
> **14:107.1** [with no Qualifier]{.underline} will be reported to the
> FBI as All Other Offenses (NIBRS 90Z). The reporting agency will
> receive the following Warning message:\
> \"WARNING \-\-- This LRS submitted without a Qualifier will be
> reported as All Other Offenses (90Z)." If this is not the correct
> offense, resubmit this LRS code with a Qualifier. **Warning 22045**

**Louisiana Revised Statute (6)**

> **14:129.1** [with no Qualifier]{.underline} will be reported to the
> FBI as a Simple Assault (NIBRS 13B). The reporting agency will receive
> the following Warning message[:\
> ]{.underline}\"WARNING \-\-- This LRS submitted without a Qualifier
> will be reported as a Simple Assault (13B)." If this is not the
> correct offense, resubmit this LRS code with a Qualifier. **Warning
> 22050**

###### Hard-Coded Edits for LRS Codes Without a Property Description-Based Qualifier

> **14:67** [with no Qualifier]{.underline} will be reported to the FBI
> as All Other Larceny-Theft (NIBRS 23H), or other offenses as
> determined by Property Description (15) hard codes, shown below.
>
> When LRS of 14:67 is submitted with no Qualifier and Property
> Description (15) is other than \"03\", "04", \"05\", \"24\", \"28\",
> \"37\" or \"38\" the agency will receive the following Warning
> message:\
> \"WARNING\-- This LRS submitted without a Qualifier will be reported
> as All Other Larceny-Theft (23H)\" If this is not the correct property
> description code, resubmit property description code. **Warning
> 22055**
>
> When LRS 14:67 is submitted with no Qualifier and Property Description
> (15) is \"38\", the offense will be reported to the FBI as Theft of
> Motor Vehicle Parts (NIBRS 23G) and the agency will receive the
> following Warning message:\
> \"WARNING\-- This LRS submitted without a Qualifier and \"38\" in DE
> \# 15 will be reported as Theft of Motor Vehicle Parts (23G).\" If
> this is not the correct Property Description code, resubmit Property
> Description code. **Warning 22060\
> **
>
> When LRS 14:67 is submitted with no Qualifier and Property Description
> (15) is \"03\", \"05\", \"24\", \"28\", or \"37\", the offense will be
> reported to the FBI as Motor Vehicle Theft (240), and the agency will
> receive the following Warning message:\
> \"WARNING \-- This LRS submitted without a Qualifier and \"03\",
> \"05\", \"24\", \"28\", or \"37\" in DE \# 15 will be reported as
> Motor Vehicle Theft (240).\" If this is not the correct property
> description code, resubmit property description code. **Warning 22065\
> **
>
> When LRS 14:67 is submitted with no Qualifier and Property Description
> (15) is \"04\", the offense will be reported as Theft of a Bicycle,
> and the agency will receive the following Warning message:
>
> \"WARNING \-- This LRS submitted without a Qualifier and \"04\" in DE
> \# 15 will be reported as theft of a bicycle.\" If this is not the
> correct property description code, resubmit property description code.
> **Warning 22070**

**Louisiana Revised Statute (6)**

> **LRS 14:68** will be reported to the FBI as All Other Larceny-Theft
> (NIBRS 23H), or Motor Vehicle Theft (NIBRS 240) as determined by
> Property Description (15) hard coding shown below:
>
> When LRS 14:68 is submitted with no Qualifier and Property Description
> (15) is not "03\", "05\", "24\", "28\" or "37\", the agency will
> receive the following Warning message:\
> "WARNING\-- This LRS submitted will be reported as All Other
> Larceny-Theft (23H)." If this is not the correct property description
> code, resubmit property description code. **Warning 22071**
>
> When LRS 14:68 is submitted and Property Description (15) is "03\",
> "05\", "24\", "28\" or "37\", Motor Vehicle Theft (NIBRS 240), then
> the agency will receive the following Warning message:\
> **"WARNING\-- This LRS submitted and "03\", "05\", "24\", "28\" or
> "37\", in DE \# 15 will be reported as Motor Vehicle Theft (240)." If
> this is not the correct property description code, resubmit property
> description code.\
> WARNING 22072**

**Allowed Entries for Juvenile Qualifiers:**

LIBRS accepts the following [juvenile specific]{.underline} reportable
offenses that are not part of the list of LRS codes:

Agency should submit the following codes in this data element for
juvenile specific offenses:

> **JU:CUR J**uvenile Curfew Violations will be reported to the FBI as
> Curfew/Loitering/Vagrancy violations (NIBRS 90B - Society)
>
> **~~JU:RUN~~** Juvenile Runaways will be reported to the FBI under
> Runaways offense (NIBRS 90I - Society - Not a crime)
>
> **JU:TRU** Juvenile Truancy will be reported to the FBI as All Other
> Offenses (NIBRS 90Z - Society - Not a Crime)
>
> **JU:UNG** Juvenile Ungovernables will be reported to the FBI under
> Disorderly Conduct Offense (NIBRS 90C - Society)

**Louisiana Revised Statute (6)**

**Allowed Entries for Inchoates:**

When LRS codes of [14:25]{.underline}, [14:26]{.underline},
[14:28]{.underline} and [14:107.2]{.underline} are reported as offenses,
the base LRS code of the actual offense must be *immediately* followed
by a dash and the data value listed below indicating which Inchoate
would be applicable. Only one of the following Inchoate Modifiers can be
used per LRS offense:

  LRS Inchoate Modifiers   
  ------------------------ -----------------------------
  A                        Accessory After the Fact
  C                        Conspiracy
  I                        Inciting a Felony
  S                        Solicitation
  H                        Hate Crime Penalty Enhancer

**Example:** If the LRS offense is Aggravated Assault (14:87.2/F) and
the Offender or the Arrestee was responsible for Accessory After the
Fact then the agency would submit the following: **14:87.2/F-A.** This
will be reported to the FBI as an Aggravated Assault, Accessory After
the Fact as the offense and for LIBRS reporting this will be considered
as All Other Offenses (NIBRS 90Z).

When a LRS Code is a Group A Offense (Felony), but is submitted with the
Inchoates of \"-A\", \"-C\", \"-I\", or \"-S\" appended, the offense
will be reported to NIBRS as All Other Offenses (NIBRS 90Z).

When a LRS Code is a Group B Offense (Misdemeanor), but is submitted
with the Inchoates of \"-A\", \"-C\", \"-I\", or \"-S\" appended, the
offense will be reported to NIBRS as the appropriate Group B Offense as
defined on the LIBRS/LRS Master Code Table.

Requirements:

> 1\) When Solicitation for Murder (14:28.1) is reported, it should be
> submitted without a Qualifier. This offense will be reported to the FBI
> as All Other Offense (NIBRS 90Z).
>
> 2\) When Principal (14:24) is used as an LRS charge, since this is a
> definitional LRS and does not carry any penalties, it is not necessary
> to submit this LRS to LIBRS.
>
> 3\) An LRS code appended with \"A\", \"C\", \"I\", \"S\", or \"H\"
> indicates the offense is an Inchoate of the LRS Offense shown in first
> ten digits Louisiana Revised Statute (6) or Louisiana Revised Statute of
> Arrest (45). These Modifiers for an LRS code should always be considered
> \"Completed\", even if the principal LRS offense was not. The

**Louisiana Revised Statute (6)**

> offender completed the conspiracy, even if the offense itself was not
> completed by the offender conspired with. **Error 22085**
>
> 4\) When an LRS Code is submitted with the Inchoate \"-H\" appended, the
> LRS will be reported to the FBI to NIBRS under the offense code defined
> on the LIBRS/LRS Master Code Table.

**LRS Qualifiers List**

Qualifiers must be associated with the LRS codes as shown in the
LIBRS/LRS Master Code Table. Only the combinations shown in the table
below qualify as a valid entry in Data Element \# 6 (LRS of Offense) and
Data Element \# 45 (LRS of Arrest Offense). An agency CANNOT append
these Qualifiers to any LRS Code to classify offense to be reported,
unless it is a valid LRS Code combination as classified on the LIBRS/LRS
Master Code Table.

> **AA** [Vehicular Homicide with Intent to Kill]{.underline}: (Murder
> and Nonnegligent Manslaughter -- NIBRS 09A - Person)
>
> **A** [Anal penetration:]{.underline} Anal sexual intercourse with
> another person, forcibly and/or against that person\'s will; or not
> forcibly or against the persons will where the victim is incapable of
> giving consent because of his/her youth or because of his/her
> temporary or permanent mental or physical incapacity. (Forcible Sodomy
> -- NIBRS 11B - Person)
>
> **B** [Theft from Building:]{.underline} A theft from within a
> building which is either open to the general public or where the
> offender has legal access. (Theft from Building - 23D - Property)
>
> **C** [Theft from Coin Operated Machine:]{.underline} Theft from a
> machine or device which is operated or activated by the use of coins.
> (Theft from Coin Operated Machine - 23E - Property)
>
> **D** [Drug/Narcotic Violations:]{.underline} Offender unlawfully
> distributes or dispenses a controlled dangerous substance to a
> recipient or to another who subsequently distributes or dispenses such
> controlled dangerous substance, which is the direct cause of the death
> of the person who ingested or consumed the controlled dangerous
> substance. (Drug/Narcotic Violations - 35A - Society)
>
> **E** [Embezzlement:]{.underline} Unlawful misappropriation by an
> offender to his/her own use or purpose of money, property, or some
> other thing of value entrusted to his/her

**Louisiana Revised Statute (6)**

> care, custody, or control. (Embezzlement -- NIBRS 270 - Property)
>
> **F** [Actual Force Used Against a Victim or Threat of Force
> Displaying a Weapon:]{.underline} Might be used to determine if a
> purse snatching is to be reported as Strong-Arm Robbery (14:65.1/F),
> or as Larceny Theft (14:65.1) (Aggravated Assault -- NIBRS 13A --
> Person; or Robbery- NIBRS 120 - Person)
>
> **FR [Fraud - False Pretense/Swindle/Confidence Game:]{.underline}
> Intentional misrepresentation of existing fact or condition, or the
> use of some other deceptive scheme or device, to obtain money, goods,
> or other things of value. (False Pretense/Swindle/Confidence Game --
> NIBRS 26A - Property)\
> **
>
> **G** [Betting and Wagering:]{.underline} To unlawfully stake money or
> something else of value on the happening of an uncertain event or on
> the ascertainment of a fact in dispute. (Betting/Wagering - 39A -
> Society)
>
> **H** [Inhabited Dwelling:]{.underline} Structure occupied as a place
> of settled residence or habitat (lived in regularly or routinely).
> Arson reporting (Arson -- NIBRS 200 - Property)
>
> **I** [Immovable Structures:]{.underline} Fixed permanent or immovable
> things; include house trailer or houseboat if used as permanent
> dwelling.
>
> [Burglary:]{.underline} Unlawful entry into a building or other
> structure with intent to commit a felony or a theft.\
> \
> [Trespass of Real Property:]{.underline} To unlawfully enter land, a
> dwelling, or other real property. (Burglary -- NIBRS 220 - Property,
> or Trespass of Real Property -- NIBRS 90J - Society)
>
> **J** [Self-Inflicted Serious Bodily Injuries:]{.underline} (All Other
> Offenses -- NIBRS 90Z - Person)
>
> **JU:CUR** [Juvenile Curfew Violations:]{.underline} will be reported
> to the FBI as curfew/loitering/ vagrancy violations
> (Curfew/Loitering/Vagrancy Violations -- NIBRS 90B - Society)
>
> **~~JU:RUN~~** [Juvenile Runaways:]{.underline} will be reported to
> the FBI under Runaways offense (Runaway -- NIBRS 90I - Society - Not a
> Crime)
>
> **JU:TRU** [Juvenile Truancy:]{.underline} Absent from school without
> permission. Reported to NIBRS as All Other Offenses (NIBRS 90Z -
> Society - Not a Crime)
>
> **JU:UNG** [Juvenile Ungovernables:]{.underline} will be reported to
> the FBI as Disorderly Conduct (Disorderly Conduct -- NIBRS 90C -
> Society)

**Louisiana Revised Statute (6)**

> **K** [Pocket Picking:]{.underline} Theft of articles from another
> person\'s physical possession by stealth where the victim usually does
> not become immediately aware of the theft. (Pocket Picking -- NIBRS
> 23A - Property)
>
> **L** [Murder and Non-Negligent Manslaughter:]{.underline} Willful
> (non-negligent) killing of one human being by another (human being
> live born\--not an embryo or fetus in utero) (Murder and Non-Negligent
> Manslaughter -- NIBRS 09A - Person)
>
> **M** [Movable Structures:]{.underline} Tents, boats, airplanes,
> lawnmowers, hand tools, farm and construction equipment, etc.\--not
> permanent dwellings\--Larceny Theft (All Other Larceny -- NIBRS 23H-
> Property)
>
> **N** [Rubbing/Touching:]{.underline} No actual penetration-\"indecent
> liberties\", \"child molesting\", no elements of NIBRS 11A, 11B or 11C
> were applicable (Forcible Fondling -- NIBRS 11D - Person)
>
> **0** [Oral Intercourse:]{.underline} Oral sexual intercourse with
> another person, forcibly and/or against that person\'s will. Or, not
> forcibly or against the persons will where the victim is incapable of
> giving consent because of his/her youth or because of his/her
> temporary or permanent mental or physical incapacity. (Forcible Sodomy
> -- NIBRS 11B - Person)
>
> **P** [Sexual Assault With an Object:]{.underline} To use an object or
> instrument to unlawfully penetrate, however slightly, the genital or
> anal opening of the body of another person, forcibly and/or against
> that person\'s will. Or, not forcibly or against the persons will
> where the victim is incapable of giving consent because of his/her
> youth or because of his/her temporary or permanent mental or physical
> incapacity. (Sexual Assault With an Object -- NIBRS 11C - Person)
>
> **Q** [Victim Had Offender Inflict Serious Bodily Injuries to
> Him/Her:]{.underline} Victim made the offender inflict injuries to
> his/her person\--no intent on part of the offender. (Aggravated
> Assault -- NIBRS 13A - Person)
>
> **R** [Operating/Assisting Gambling:]{.underline} To unlawfully
> operate, promote, or assist in the operation of a game of chance.
> (Operating/Promoting/ Assisting Gambling -- NIBRS 39B - Property)
>
> **S** [Shoplifting:]{.underline} The theft, by someone other than an
> employee of the victim, of goods or merchandise exposed for sale.
> (Shoplifting -- NIBRS 23C - Property)
>
> **T** [Threat of Force Used Against the Victim:]{.underline} No
> weapons and no physical attack used in this threat. (Intimidation --
> NIBRS 13C - Person)
>
> **U** [Uninhabited Dwelling:]{.underline} Structures uninhabited or
> abandoned or not normally in use. Arson reporting (Arson -- NIBRS 200
> - Property)

**Louisiana Revised Statute (6)**

> **V** [Vaginal penetration:]{.underline} With force or without force
> where the victim is incapable of giving consent because of youth or
> because of temporary or permanent mental incapacity (Forcible Rape --
> NIBRS 11A - Person)
>
> **W** [Fetal Death:]{.underline} Human embryo or fetus in utero (All
> Other Offenses -- NIBRS 90Z - Society)
>
> **X** [Falsified Records by Forgery or Counterfeiting:]{.underline}
> Altering, copying, or imitation of something, without authority or
> right, with the intent to deceive or defraud by passing the copy or
> thing altered or imitated as that which is original or genuine. Or,
> the selling, buying, or possession of an altered, copied, or imitated
> thing with the intent to deceive or defraud. (Counterfeiting/Forgery
> -- NIBRS 250 - Property)
>
> **Y** [Destroyed Records or Property:]{.underline}
> (Destruction/Damage/Vandalism of Property -- NIBRS 290 - Property)
>
> **Z** [Theft from a Motor Vehicle:]{.underline} Theft of articles from
> motor vehicle whether locked or unlocked. (Theft from a Motor Vehicle
> -- NIBRS 23F - Property)

  LRS Inchoate Modifiers   
  ------------------------ -----------------------------
  A                        Accessory After the Fact
  C                        Conspiracy
  I                        Inciting a Felony
  S                        Solicitation
  H                        Hate Crime Penalty Enhancer

**\
**

### Agency Supplied NIBRS Code (N6)

**Data Characteristics:** 3 Character AlphaNumeric

**Requirements:**

1)  If the value of LIBRS Spec Indicator (C12) is "2.5", then EVERY
    Offense Segment (20) in the data submission MUST have an Agency
    Supplied NIBRS Code (N6). **If Agency Supplied NIBRS Code (N6) is
    missing, WinLIBRS will insert the *default* NIBRS value based on the
    LRS for that particular offense**. **\
    Warning 06001 \*\*\*New Warning Message\*\*\*\
    **

2)  MUST be a valid code. **Error 06002 \*\*\*New Error Message\*\*\*\
    **

**\
**

Offense Attempted/Completed (7)
-------------------------------

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error 12001\
> **

2\) MUST be a valid code of \"A\" (Attempted) or \"C\" (Completed).
**Error 12051\
**

> 3\) When Attempted ("A") is entered and Louisiana Revised Statute (6) is
> either a *Crime Against Property,* or a **Gambling (NIBRS 39A or NIBRS
> 39B), Kidnaping (NIBRS 100) or Drug/Narcotic offense (NIBRS 35A or
> 35B)**, then Type of Property Loss (14) must be None (\"1\") or Unknown
> (\"8"). **Error 10077\
> **
>
> 4\) When Completed ("C") is entered and Louisiana Revised Statute (6) is
> either a *Crime Against Property*, or a Gambling (NIBRS 39A or NIBRS
> 39B), Kidnaping (100), or Drug/Narcotic offense (NIBRS 35A or NIBRS
> 35B), then Property Segments (**Segments 30 and 31**) must be present
> with a valid code in Type of Property Loss (14). **Error 10078\
> **

**5) Offense Attempted/Completed (7) must be Completed ("C") when
Louisiana Revised Statute (6) is an \"Assault\" or \"Homicide.\" Error
12056**

**Allowed Entries:** Enter only one (1) code for each Offense Segment:

  Offense Attempted/Completed   
  ----------------------------- -----------
  A                             Attempted
  C                             Completed

**Example:** During the same incident, Victim Number One (001) was raped
and the Offender attempted to rape Victim Number Two (002), but had to
leave the scene before the act was consummated due to the arrival of the
police. Offense 001 should be entered as Aggravated Rape (LRS 14:42/V)
and have Completed (\"C\") entered in Offense Attempted/Completed (7).
Offense 002 should also be entered as Aggravated Rape (LRS 14:42/V), but
will have Attempted ("A") entered in Offense Attempted/Completed (7).

**\
**

### Offender Suspected of Using/Gaming Motivation (8)

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error 14001\
> **
>
> 2\) MUST be a valid code. **Error** **14004\
> **
>
> 3\) If more than one code entered, CANNOT be a duplicate. **Error**
> **12006\
> **
>
> 4\) Value \"N\" = Not Applicable is mutually exclusive of any other value
> entered, i.e., \"N\" is to be entered only if no other code applies.
> **Error** **12007**

**Allowed Entries:** Enter up to four (**4) codes for each Offender
Segment:**

  ----------------------------------------------------- -----------------------------------------------
  **Offender Suspected of Using/Gambling Motivation**   
  A                                                     Alcohol
  C                                                     Computer Equipment
  D                                                     Drugs/Narcotics
  G                                                     Gaming Activity Motive for Crime (LIBRS only)
  N                                                     Not Applicable
  ----------------------------------------------------- -----------------------------------------------

**Examples**:

\(1) Witness to an assault reported that the Victim and Offender were in
a bar drinking beer when an argument broke out and the Offender attacked
the Victim with a knife. Alcohol ("A") should be entered in Offender
Suspected of Using/Gaming Motivation (8).

\(2) A computer \"hacker\" used his personal computer and the Internet to
gain access to a company\'s computer system and steal proprietary data.
Computer Equipment ("C") should be entered in Offender Suspected of
Using/Gaming Motivation (8).

\(3) Offender robbed a bank and a police officer arrested him while
trying to leave the bank. Under questioning, the Offender told the
officer he needed money because he lost \$10,000 that morning at the
river boat casino. The officer **also smelled alcohol on his breath.
Both Alcohol ("A") and Gaming Activity Motive for Crime ("G") should be
entered into** Offender Suspected of Using/Gaming Motivation (8).

Bias Motivation/Bias Crime Type (8A)
------------------------------------

**Data Characteristics:** 2 Character Alpha

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error 14001**
>
> 2\) MUST be a valid code. **Error** **14004**

**Allowed Entries:** Enter only [one]{.underline} code **for each
Offender Segment (40):**

####### 

                                                                                     **LIBRS Data Value**   **Bias Motivation Category**                                     **NIBRS Data Value**
  ---------------------------------------------------------------------------------- ---------------------- ---------------------------------------------------------------- ----------------------
  **Race/Ethnicity/Ancestry**                                                        11                     Anti-White                                                       11
                                                                                     12                     Anti-Black or African American                                   12
                                                                                     13                     Anti-American Indian or Alaska Native                            13
                                                                                     14                     Anti-Asian                                                       14
                                                                                     15                     Anti-Multiple Races, Group                                       15
                                                                                     16                     Anti-Native Hawaiian or Other Pacific Islander                   16
                                                                                     31                     Anti-Arab                                                        31
                                                                                     32                     Anti-Hispanic or Latino                                          32
                                                                                     33                     Anti-Other Race/Ethnicity/Ancestry                               33
  **Religion**                                                                       21                     Anti-Jewish                                                      21
                                                                                     22                     Anti-Catholic                                                    22
                                                                                     23                     Anti-Protestant                                                  23
                                                                                     24                     Anti-Islamic (Muslim)                                            24
                                                                                     25                     Anti-Other Religion                                              25
                                                                                     26                     Anti-Multiple Religions, Group                                   26
                                                                                     27                     Anti-Atheism/Agnosticism                                         27
                                                                                     28                     Anti-Mormon                                                      28
                                                                                     29                     Anti-Jehovah's Witness                                           29
                                                                                     81                     Anti-Eastern Orthodox (Russian, Greek, Other)                    81
                                                                                     82                     Anti-Other Christian                                             82
                                                                                     83                     Anti-Buddhist                                                    83
                                                                                     84                     Anti-Hindu                                                       84
                                                                                     85                     Anti-Sikh                                                        85
  **Sexual Orientation**                                                             41                     Anti-Gay (Male)                                                  41
                                                                                     42                     Anti-Lesbian (Female)                                            42
                                                                                     43                     Anti-Lesbian, Gay, Bisexual, or Transgender (Mixed Group)        43
                                                                                     44                     Anti-Heterosexual                                                44
                                                                                     45                     Anti-Bisexual                                                    45
  **Disability**                                                                     51                     Anti-Physical Disability                                         51
                                                                                     52                     Anti-Mental Disability                                           52
  **Gender**                                                                         61                     Anti-Male                                                        61
                                                                                     62                     Anti-Female                                                      62
  **Gender Identity**                                                                71                     Anti-Transgender                                                 71
                                                                                     72                     Anti-Gender Non-Conforming                                       72
  **None/Unknown**                                                                   88                     None (no bias) (mutually exclusive)                              88
                                                                                     99                     Unknown (offender's motivation not known) (mutually exclusive)   99
  **Other Bias (LIBRS Only)**                                                        70                     Age                                                              99
                                                                                     71                     Ancestry                                                         33
                                                                                     72                     Creed                                                            25
                                                                                     73                     Gender                                                           99
                                                                                     74                     Organizational Affiliation                                       99
  LIBRS Accepts this Data Value, But Requires Translation to NIBRS Data Value                                                                                                
  NIBRS Converted Data Values Required from LIBRS-Only Data Values                                                                                                           
  Redefined/Repurposed; Migration of Historical Data Required (See LIBRS Spec 2.2)                                                                                           

####### 

**In LIBRS, incidents [not]{.underline} having facts that indicate
biased motivation on the part of the Offender are to be coded as None
(88), while incidents involving [ambiguous]{.underline} facts (that is,
where some facts are present, but not conclusive) are to be coded
Unknown (99).**

**If any Bias Motivation/Bias Crime Type codes are used, other than None
(88) or Unknown (99), then the incident will be considered a hate crime,
and the Louisiana Revised Statute (6) probably should be appended with
the Hate Crime Penalty Enhancer (-H) to represent enhanced penalties
related to hate crimes in LRS 14:107.2.**

**Bias Motivation/ Bias Crime Type (8A)**

**\
**

### Location Type (9)

**Data Characteristics:** 2 Character Alpha

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error** **12001**
>
> 2\) MUST be a valid code. **Error** **12004**

**Allowed Entries:** Enter only one (1) code **per Offense Segment:**

+-----------------+-----------------+-----------------+-----------------+
| 01              | Air, Bus, Train | 24              | Specialty Store |
|                 | or Terminal     |                 | (includes fur   |
|                 |                 |                 | store, jewelry  |
|                 |                 |                 | store, TV       |
|                 |                 |                 | store, dress    |
|                 |                 |                 | shop, etc.)     |
+-----------------+-----------------+-----------------+-----------------+
| 02              | Bank Savings    | 25              | Other or        |
|                 | and Loan        |                 | Unknown (use    |
|                 | (includes other |                 | only if no      |
|                 | financial       |                 | other code      |
|                 | institutions)   |                 | applies)        |
+-----------------+-----------------+-----------------+-----------------+
| 03              | Bar or Night    | 37              | Abandoned or    |
|                 | Club            |                 | Condemned       |
|                 |                 |                 | Structure       |
+-----------------+-----------------+-----------------+-----------------+
| 04              | Church,         | 38              | Amusement Park  |
|                 | Synagogue or    |                 |                 |
|                 | Temple          |                 |                 |
|                 | (includes other |                 |                 |
|                 | religious       |                 |                 |
|                 | buildings)      |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 05              | Commercial or   | 39              | Arena, Stadium, |
|                 | Office Building |                 | Fairgrounds or  |
|                 |                 |                 | Coliseum        |
+-----------------+-----------------+-----------------+-----------------+
| 06              | Construction    | 40              | ATM Separate    |
|                 | Site            |                 | from Bank       |
|                 |                 |                 |                 |
|                 |                 |                 | *(formerly      |
|                 |                 |                 | Casino Land     |
|                 |                 |                 | Based)*         |
+-----------------+-----------------+-----------------+-----------------+
| 07              | Convenience     | 41              | Auto Dealership |
|                 | Store           |                 | (New or Used)   |
|                 |                 |                 |                 |
|                 |                 |                 | *(formerly      |
|                 |                 |                 | Casino          |
|                 |                 |                 | Riverboat)*     |
+-----------------+-----------------+-----------------+-----------------+
| 08              | Department or   | 42              | Camp or         |
|                 | Discount Store  |                 | Campground      |
+-----------------+-----------------+-----------------+-----------------+
| 09              | **Drug Store,   | 44              | Daycare         |
|                 | Doctor Office   |                 | Facility        |
|                 | or Hospital     |                 |                 |
|                 | (includes       |                 |                 |
|                 | medical supply  |                 |                 |
|                 | building)**     |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 10              | Field or Woods  | 45              | Dock, Wharf,    |
|                 |                 |                 | Freight or      |
|                 |                 |                 | Modal Terminal  |
+-----------------+-----------------+-----------------+-----------------+
| 11              | Government or   | 46              | Farm Facility   |
|                 | Public Building |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 12              | Grocery or      | 47              | Gambling        |
|                 | Supermarket     |                 | Facility,       |
|                 |                 |                 | Casino or Race  |
|                 |                 |                 | Track           |
+-----------------+-----------------+-----------------+-----------------+
| 13              | Highway, Road   | 48              | Industrial Site |
|                 | or Alley        |                 |                 |
|                 | (includes       |                 |                 |
|                 | street)         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 14              | Hotel, Motel,   | 49              | Military        |
|                 | Etc. (includes  |                 | Installation    |
|                 | other temporary |                 |                 |
|                 | lodgings)       |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 15              | Jail or Prison  | 50              | Park or         |
|                 | (includes       |                 | Playground      |
|                 | penitentiary)   |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 16              | Lake or         | 51              | Rest Area       |
|                 | Waterway        |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 17              | Liquor Store    | 52              | School: College |
|                 |                 |                 | or University   |
+-----------------+-----------------+-----------------+-----------------+
| 18              | Parking Lot or  | 53              | School:         |
|                 | Garage          |                 | Elementary or   |
|                 |                 |                 | Secondary       |
+-----------------+-----------------+-----------------+-----------------+
| 19              | Rental Storage  | 54              | Shelter:        |
|                 | Facility        |                 | Mission or      |
|                 | (includes       |                 | Homeless        |
|                 | \"Mini-Storage\ |                 |                 |
|                 | "               |                 |                 |
|                 | and             |                 |                 |
|                 | \"Self-Storage\ |                 |                 |
|                 | "               |                 |                 |
|                 | buildings)      |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 20              | Residence or    | 55              | Shopping Mall   |
|                 | Home            |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 21              | Restaurant      | 56              | Tribal Lands    |
|                 | (includes       |                 |                 |
|                 | Cafeteria)      |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 22              | School          | 57              | Community       |
|                 | (includes       |                 | Center          |
|                 | University)\    |                 |                 |
|                 | **Note:** This  |                 |                 |
|                 | data value was  |                 |                 |
|                 | replaced by     |                 |                 |
|                 | Location Codes  |                 |                 |
|                 | 52 and 53 and   |                 |                 |
|                 | is to be used   |                 |                 |
|                 | only by         |                 |                 |
|                 | agencies that   |                 |                 |
|                 | have not        |                 |                 |
|                 | adopted the new |                 |                 |
|                 | codes:          |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| 23              | Service or Gas  | 58              | Cyberspace      |
|                 | Station         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+

**Examples:**

\(1) An assault started in a bar (\"03\"), continued into an adjoining
parking lot (\"18\"), and ended in the street (\"13\"). As the bar was
the location where the offense was initiated and best describes the
circumstances of the crime, Bar/Night Club (\"03\") should be entered.

\(2) Two Offenders robbed a bar. One of the Offenders raped a female
customer in the bar while the other Offender stood at the door with a
gun. In this case, there is one incident, with two offenses: robbery and
forcible rape. The location of the robbery would be Bar/Night Club
("03\"), and the location of the forcible rape would also be Bar/Night
Club (\"03\").

**\
**

Number of Premises Entered (10)
-------------------------------

**Data Characteristics:** 2 Character **Alpha/Numeric**

**Requirements:**

> 1\) MUST be entered if Louisiana Revised Statute (6) has a **NIBRS
> Offense code \[as defined on the Master LIBRS/LRS Code Table\] of
> [220]{.underline}** and Louisiana Revised Statute is one of the
> following:
>
> **14:60/I 14:62/I 14:62.1 14:62.2 14:62.3 14:62.4\
> 14:62.5 14:62.6 14:130.1/I 14:228/A4**
>
> **\
> *[and]{.underline}*** Location Type (9) contains Hotels/Motels/Etc.
> (\"14\") or Rental Storage Facility (\"19\"). **Error** **12057**
>
> 2\) MUST be numeric entry of 01-99 if entered. **Error** **12002**
>
> 3\) When entered, Location Type 9 (9) must be Hotel/Motel/Etc. (\"14\")
> or Rental Storage Facility (\"19\"), and LRS (6) **has a related NIBRS
> offense code of 220 \[as defined on the Master LIBRS/LRS Code Table\],**
> and Louisiana Revised Statute (6) is one of the following:
>
> **14:60/I 14:62/I 14:62.1 14:62.2 14:62.3 14:62.4\
> 14:62.5 14:62.6 14:130.1/I 14:228/A4\
> **(**Error** **12052**

**Example:** A \"self-storage\" building was burglarized and 11 rented
storage compartments were forcibly entered. The number \"11\" (for
eleven compartments) should be entered into Number of Premises Entered
(10).

**\
**

### Method of Entry (11)

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be a valid code. **Error** **12004**
>
> 2\) MUST be entered if Louisiana Revised Statue (6) **has a NIBRS offense
> code of 220 (Burglary) \[as defined on Master LIBRS/LRS Code Table\],**
> and a Louisiana Revised Statute (6) that is one of the following:
>
> **14:60/I 14:62/I 14:62.1 14:62.2 14:62.3 14:62.4\
> 14:62.5 14:62.6 14:130.1/I 14:228/A4\
> Error** **12053**
>
> 3\) **MUST be blank when offense code is not Burglary (NIBRS 220) and
> Louisiana Revised Statute (6) is not one of the following:**
>
> **14:60/I 14:62/I 14:62.1 14:62.2 14:62.3 14:62.4\
> 14:62.5 14:62.6 14:130.1/I 14:228/A4**
>
> **Error 12054**

**Allowed Entries:** Enter only one (1) code per Offense Segment:

  --- ----------
  F   Force
  N   No Force
  --- ----------

**Example:** Investigation of a burglary complaint disclosed that the
Offender(s) entered the building through an unlocked street door, then
forced a locked door to an office and stole a typewriter. Since one door
was forced, the Method of Entry should be entered as Force ("F").

Type of Criminal Activity/Gang Information Nos. 1, 2 and 3 (12)
---------------------------------------------------------------

**Data Characteristics**: 1 Character Alpha

**Requirements (Criminal Activity)**

> 1\) MUST be a valid code. **Error 12004\
> **
>
> 2\) If more than one code entered, CANNOT be a duplicate. **Error 12006\
> **
>
> 3\) MUST be entered if Louisiana Revised Statute (6) **has a NIBRS
> offense code as defined on the Master LIBRS/LRS Code Table of:**
>
> **250**
>
> **280\
> 35A 35B**
>
> **370\
> 39C\
> 520\
> 90A 90Z**
>
> ***and* is a \"Crime Against Property\" (LARS.ibrndxcl =
> "Property").** The following LRS codes meet the above requirements
> (that is, NIBRS code + Crime Against Property):
>
> **14:59/A1** **14:59/A2 14:59/A4 14:59/A5 14:59/A6 14:59/A7**
>
> **14:59/A8 14:69 14:69.1 14:70.4/X 14:71 14:72**
>
> **14:72.1 14:72.1.1 14:72.2 14:73.4 14:72.6 14:110.2**
>
> **14:112.3 14:130.1/X 14:133 14:134.2 14:201 14:202 14:203**
>
> **14:204 14:208 14:209 14:210 14:211 14:212 14:218**
>
> **14:223 14:223.7 14:223.8 14:224 14:226 14:228/A1**
>
> **14:228/A6X 14:228/A7 14:228.1 14:229 14:230 14:353 14:405**
>
> **14:513 15:29.60 27:263 32:291 32:373 40:971/B1BX**
>
> **40:971/B1D 40:971/B1E 40:971/B1F 40:971/B1G Error 12019**
>
> 3)(a) When NIBRS Offense Code is 250, then Type of Criminal
> Activity/Gang Information (12) MUST have a valid code. **Error 84005\
> **
>
> 3)(b) When NIBRS Offense Code is 35A or 35B, then Type of Criminal
> Activity/Gang Information (12) MUST have a valid code. **Error 84006**
>
> 3)(c) When NIBRS Offense Code is 370, then Type of Criminal
> Activity/Gang Information (12) MUST have a valid code AND Type of
> Victim (25) MUST be Society ("S") . **Error 84015\
> **
>
> 3)(d) When NIBRS Offense Code is 280, then Type of Criminal
> Activity/Gang Information (12) MUST have a valid code. **Error 84020**
>
> 3)(e) When NIBRS Offense Code is 520, then Type of Criminal
> Activity/Gang Information (12) AND Type of Weapon/Force Involved (13)
> MUST have a valid code AND Type of Victim (25) MUST be Society ("S") .
> **Error 84021**
>
> **\
> **

**Type of Criminal Activity/Gang Information\
Nos. 1, 2 and 3 (12)**

> 3)(f) When NIBRS Offense Code is 39C, then Type of Criminal
> Activity/Gang Information (12) MUST have a valid code. **Error 84210**
>
> 3)(g) When NIBRS Offense Code is 720, then Type of Criminal
> Activity/Gang Information (12) MUST have a valid code and cannot be
> None; Valid Codes for the entry at criminal activity (12) = \'A',
> \'F\' , \'I\' and, \'S\'.
>
> The following LRS codes meet the above requirements (that is, NIBRS
> code =720):
>
> **14:102.1 14:102.20 14:102.4 14:102.8 14:102.10 14:102.19**
>
> 14:102.23 14:102.5 ......**Error 90031**

**Allowed Entries (Criminal Activity)**: Up to three (3) of the
following Type of Criminal Activity Codes can be entered for each of the
above Offenses:

  ------------------------------------------------ ------------------------------------------------------------------------
  **Type of Criminal Activity/Gang Information**   
  B                                                Buying/Receiving
  C                                                Cultivation/Manufacturing/Publishing (that is, production of any type)
  D                                                Distribution/Selling
  E                                                Exploiting Children
  I                                                Possession with Intent to Sell (reported to NIBRS as a "P")
  O                                                Operating/Promotion/Assisting
  P                                                Possessing/Concealing
  T                                                Transporting/Transmitting/Importing
  U                                                Using/Consuming
  X                                                Other (reported to NIBRS as a \"P\")
  A                                                Simple\\Gross Neglect
  F                                                Organised Abuse
  I                                                Intentional Abuse and Torture
  S                                                Animal Sexual Abuse
  ------------------------------------------------ ------------------------------------------------------------------------

**Example:** The Offenders published and sold pornographic photographs
of children. Therefore, up to three types of Criminal Activity can be
entered: Cultivating/Manufacture/Publishing ("C"), Distributing/Selling
("D"), and Exploiting Children (\"E\").

**Requirements (Gang Information):**

> **4) MUST be entered if Louisiana Revised Statute (6) has a NIBRS
> Offense code \[as defined in the Master LIBRS/LRS Code Table\] of:**
>
> **09A 09B\
> 100\
> 11A 11B 11C 11D\
> 120\
> 13A 13B 13C**
>
> ***and* is a \"Crime Against Person\" (LARS.ibrndxcl = "Person") for
> NIBRS Offense codes 09A, 09B, 100, 11A, 11B, 11C, 11D, 13A, 13B and
> 13C, *or* is a "Crime Against Property" (LARS.ibrndxcl = "Property")
> for NIBRS Offense code 120.** The
>
> following LRS codes meet the above requirements (that is, NIBRS code +
> Crime Against Property/Person):
>
> **14:30 14:30.1 14:31 14:32 14:32.1/AA\
> 14:34 14:34.1 14:34.2 14:34.3 14:34.4\
> 14:34.5 14:34.5.1 14:34.6 14:34.7 14:35**
>
> **14:35.1 14:35.2 14:35.3 4:35.3/M 14:37**
>
> **14:37.1 14:37.2 14:37.3 14:37.4 14:37.5**
>
> **14:38 14:38.1 14:38.2 14:38.3 14:39.1**
>
> **14:39.2 14:40 14:40.1 14:40.2 14:40.3**
>
> **14:40.4 14:40.5 14:40.6 14:40.60 14:42/A**
>
> **14:42/V 14:42.1/A 14:42.1/V 14:43/A 14:43/V**
>
> **14:43.1/N 14:43.1/P 14:43.2/N 14:43.2/P 14:43.3**
>
> **14:43.4 14:43.5 14:44 14:44.1 14:44.1/A**
>
> **14:44.1/N 14:44.1/O 14:44.1/P 14:44.1/V 14:44.2**
>
> **14:45 14:45.1 14:46 14:46.1 14:46:30**
>
> **14:54.1 14:54.6 14:60 14:62.8 14:64**
>
> **14:64.1 14:64.2 14:64.3 14:64.4 14:65**
>
> **14:65.1/F ~~14:65.2~~ 14:81.2 14:87.1 14:87.2/F**
>
> **14:87.2/L 14:87.5/F 14:87.5/L 14:89.1 14:92.3**
>
> **14:93/F 14:93.2.3 14:93.5 14:94/E 14:103/A1**
>
> **14:107.1/F 14:108/B1B 14:108/B1BF 14:108.2 14:122/F**
>
> **14:122/T 14:122.1 14:122.2 14:129/A1 14:129/A2F**
>
> **14:129/A2T 14:129.1 14:129.1/F 14:129.1/T 14:130.1/A**
>
> **14:130.1/T 14:130.1/F 14:133.1/F 14:133.1/T 14:285**
>
> **14:404/Q 14:501 Error 12019**
>
> **5) A value of None/Unknown ("N") is mutually exclusive with any
> other Gang Information codes. Error 12007**

**Allowed Entries (Gang Information):** T**wo (2) Gang Information codes
can be entered for each of the above offenses:**

  ---------------------- ---------------
  **Gang Information**   
  J                      Juvenile Gang
  G                      Other Gang
  N                      None/Unknown
  ---------------------- ---------------

**Example (Gang Information):** Two males, aged 19, were on bicycles
riding through a neighborhood when they were approached by three males
and forced to stop. Words were exchanged and one of the bicyclists was
attacked. Each of the three attackers, one, aged 16 and the other two,
aged 17, had identical tattoos on their upper arm. This marking was
commonly associated with a local gang. The entry for Type of Criminal
Activity/Gang Information should be Juvenile Gang ("J").

Type of Weapon/Force Involved Nos. 1, 2 and 3 (13)
--------------------------------------------------

**Data Characteristics:** 3 Character Alpha

**Requirements:**

> 1\) MUST be a valid code. **Error 12004
>
> 2\) If more than one code entered, CANNOT be a duplicate. **Error 12006
>
> 3\) Value '99' (None) is mutually exclusive with any other value, i.e. '99' to be entered only if no other code applies. **Error 12007
>
> 4\) MUST be entered if Louisiana Revised Statute (DE 6) has a NIBRS Offense code as defined on Master LIBRS/LRS Code Table of: <b>09A, 09B, 09C, 100, 11A, 11B, 11C, 11D, 120, 13A, 13B, 210, 520</b>

> **Error 12019**

5\) If the firearm is one of the following types of automatic weapons,
add \"A\" as the third character:\
\
11 Firearm (Type not Stated)\
12 Handgun\
13 Rifle\
14 Shotgun\
15 Other Firearm.\
**Error 12058\
**

> 6\) The third character of Type of Weapon/Force Involved (13) must be
> Automatic (A) or Blank (G). **Error 12055\
> **
>
> 7\) When an Offense Segment (20) is submitted for one of the following
> Louisiana Revised Statutes (6), the Offense will be reported to the FBI
> as a Simple Assault (13B) and must have Personal Weapons (40), Other
> (90), or Unknown (95) entered in Type of Weapon/Forced Involved:
>
>
> **Error 12065**
>
> 8\) When a H**omicide Offense (NIBRS 09A, 09B or 09C) is** submitted,
> Type of Weapon/Force Involved (13) CANNOT have None (99) entered. Some
> Type of Weapon/Force Involved, other than None (99), must be used in a
> Homicide Offense. Below are the Louisiana Revised Statutes (6) for
> Homicide Offenses in Louisiana:

> **Error** **12067**

**9) If the Louisiana Revised Statute (6) is a simple assault (NIBRS
13B), but the weapon involved is:\
11 Firearm 11A Automatic Firearm\
12 Handgun 12A Automatic Handgun\
13 Rifle 13A Automatic Rifle\
14 Shotgun 14A Automatic Shotgun\
15 Other Firearm 15A Other Automatic Firearm\
\
*[then]{.underline}* this Offense should be reported as an Aggravated
Assault (NIBRS 13A).\
Error 12069**

**10)** For Human Trafficking Offenses (NIBRS Codes 64A, 64B and 40C), a
data value for Type of Weapon/Force Involved (13) MUST be specified.

**11)** **If the Louisiana Revised Statute (6) is an** **Aggravated
Assault (NIBRS 13A)** **Weapon/Force involved (13) cannot be** **None**
**(99)** **with the** **Type of Injury (33)** **other than** **None**
**(N).** **Error** **90036**

**Allowed Entries:** Can enter up to three (3) codes for each of the
above offenses:

  ---- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  11   Firearm (type not stated)
  12   Handgun
  13   Rifle
  14   Shotgun
  15   Other Firearm
  20   Knife/Cutting Instrument (e.g., ax, ice pick, screwdriver, switchblade, etc.)
  30   Blunt Object (e.g., club, hammer, etc.)
  35   Motor Vehicle (when used as a weapon)
  40   Personal Weapons (i.e., hands, feet, teeth, etc.)
  50   Poison
  60   Explosives
  65   Fire/Incendiary Device
  70   Drugs/Narcotics/Sleeping Pills
  85   Asphyxiation (by drowning, strangulation, suffocation, gas, etc.)
  90   Other (any weapon or force not fitting the above specifically coded weapon/force. Should include toy or pretend weapons if Victim thought it was real. Can also include deadly diseases.)
  95   Unknown
  99   None
  ---- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Example:** Three robbers held up a bank. One was armed with a
revolver, the second had a sawed-off shotgun, and the third had an
automatic machine gun. The entries would be: Handgun (\"12\"), Shotgun
(\"14\") and Other Automatic Firearm (\"15A").

Property Sequence Number (P1)
-----------------------------

**Data Characteristics:** 3 Character Numeric

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank.**\
> **
>
> 2\) MUST be numeric entry (001 through 999) with zero left-fill. Property
> Sequence Number (P1) distinguishes one property from another.**\
> **
>
> 3\) MUST be unique \-- CANNOT be duplicated.

**\
**

Property Sequence Number Reference (P1R)
----------------------------------------

**\*\*\* New Data Element in LIBRS 2.5 \*\*\***

**Data Characteristics:** 3 Character Numeric

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank.\
> **Error 90019 \*\*\*New Error Message\*\*\*\
> **
>
> 2\) MUST be numeric entry (001 through 999) with zero left-fill.\
> **Error 90020 \*\*\*New Error Message\*\*\*\
> **
>
> 3\) MUST match the Property Sequence Number of one of the Property
> Description segments submitted in corresponding incident.\
> **Error 90025 \*\*\*New Error Message\*\*\***

**\
**

### Type of Property Loss (14)

**Data Characteristics**: 1 Character Numeric

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error 13001\
> **
>
> 2\) MUST be a valid code. **Error 13004\
> **
>
> 3\) When Type of Property Loss (14) is None (1) or Unknown (8), then Data
> Elements 15 through 22 must be Blank () for all Offenses, except when
> the following Louisiana Revised Statute (6) Drug Violation Offenses
> (NIBRS 35A) are reported**:**
>
> **14:30.1/D 32:681 40:694 40:962.1** 40:962.1.1
>
> 40:962.1.2 40:963 40:964 40:964.1 40:966
>
> 40:967 40:968 40:969 40:970 40:971.1
>
> 40:971.2 40:981 40:981.1 40:981.2 40:981.3
>
> 40:982 40:983 40:983.1 40:989 40:989.1
>
> 40:1041 40:1238.1 40:1238.2 40:1238.3
>
> If Type of Property Loss (14) has a value of None ("1") entered when
> one of the above LRS codes is present in the incident, then Suspected
> Drug Type (20) must have a valid entry. **Error 13052**
>
> 3(a) *This edit applies to the LRS codes listed above, ONLY.\]* If
> Offense Attempted/Completed (7) is Attempted ("A"), then Type of
> Property Loss (14) MUST be None (\"1\") or Unknown (\"8\"). These are
> the only two data values accepted. (**Errors** **84001, 84003, 84104,
> 84105, 84006, 84107, 84108, 84009, 84010, 84112, 84013, 84014, 84117,
> 84120)**
>
> 4\) Type of Property Loss (14) MUST be entered if Louisiana Revised
> Statute (6) **has one of the following NIBRS Offense codes \[as defined
> on Master LIBRS/LRS Code Table\]:**
>
> **100 120\
> 200 210 220\
> 23A 23B 23C 23D 23E 23F 23G 23H\
> 240 250\
> 26A 26B 26C 26D 26E\
> 270 280 290\
> 35A 35B\
> 39A 39B 39C 39D\
> 510\
> 90A 90Z**
>
> ***[and]{.underline}* is a *Crime Against Property* (LARS.ibrndxcl =
> "Property").** The following LRS codes meet the above requirements
> (that is, NIBRS code + Crime Against Property):
>
> **\
> 14:51/H 14:51/U 14:52.1/H 14:52.1/U 14:52/H**
>
> **14:52/U 14:53/H 14:53/U 14:54/H 14:54/U**
>
> **14:55** 14:56 14:56.1 14:56.2 14:56.4
>
> 14:57 14:58 **14:59/A1 14:59/A2 14:59/A3**
>
> **4:59/A4 14:59/A5 14:59/A6 14:59/A7 14:59/A8**
>
> **14:59/A10 14:60 14:60/I 14:62/I 14:62/M**
>
> **14:62/Z 14:62.1 14:62.2 14:62.3 14:62.4**
>
> **14:62.5 14:62.6 14:62.7 14:62.8 14:63.2**
>
> **14:64 14:64.1 14:64.2 14:64.3 14:64.4**
>
> **14:65 14:65.1 14:65.1/F 14:66 14:67**
>
> **14:67/B 14:67/C 14:67/E 14:67/K 14:67/S**
>
> **14:67/Z 14:67.1 14:67.2 14:67.3 14:67.4**
>
> **14:67.5 14:67.6 14:67.7 14:67.8 14:67.9**
>
> **14:67.10 14:67.11 14:67.12 14:67.13 14:67.14**
>
> **14:67.15 14:67.16 14:67.17 14:67.19 14:67.20**
>
> **14:67.21 14.67.22 14:67.23** **14:67.25**
>
> **14:67.26 14:67.27 14:68 14:68.1 14:68.2**
>
> **14:68.3 14:68.4 14:68.6 14:68.7 14:69**
>
> **14:69.1 14:70 14:70.1 14:70.2 14:70.3**
>
> **14:70.4 14:70.4/FR 14:70.4/X 14:70.5 14:70.5/FR**
>
> **14:70.6 14:70.7 14:71 14:71.1 14:71.2**
>
> **14:72 14:72.1 14:72.1.1 14:72.2 14:72.3**
>
> **14:72.4 14:72.6 14:73 14:73.2 14:73.3**
>
> **14:73.4 14:73.5 14:73.7 14:91.5 14:93.4**
>
> **14:101 14:110.2 14:112** 14:112.1 14:112.2
>
> 14:112.3 14:112.4 14:118 14:119 14:119.1
>
> 14:120 14:126.3 14:126.3.1 14:126.4 14:130.1/B
>
> 14:130.1/I 14:130.1/X 14:130.1/Y 14:131 14:132
>
> 14:133 14:133.3 14:134.2 14:135 14:136
>
> 14:138 14:139 14:139.1 14:139.2 14:140 14:141
>
> 14:201 14:202 14:202.1 14:203 14:204
>
> 14:205/H 14:205/U 14:206 14:207 14:208
>
> 14:209 14:210 14:211 14:212 14:213
>
> 14:217 14:218 14:219 14:220 14:220.1
>
> 14:221 14:222 14:222.1 14:223 14:223.5
>
> 14:223.6 14:223.7 14:223.8 14:224 14:225
>
> 14:226 14:227 12:228.1 14:228/A1 14:228/A2
>
> 14:228/A3 14:228/A4 14:228/A6 14:228/A6Y 14:228/A6X
>
> 14:228/A7 14:229 14:230 14:231 14:331
>
> 14:351 14:352 14:353 14:405 14:511
>
> 14:512 14:513 14:6717 15:11.30 15:13.80
>
> 15:29.60 27:98/B 27:98/C 27:99 27:100/A
>
> 27:100/B 27:262 27:263 27:264/A 27:264/B
>
> 32:291 32:373 32:421 40:971/B1A 40:971/B1B
>
> 40:971/B1BX **40:971/B1C 40:971/B1D 40:971/B1E 40:971/B1F**
>
> **40:971/B1G 40:971/B1H 40:975 40:1321.G 46:114.2**
>
> **Error 13019**
>
> 5\) For every Property Description code (15) entered into a Property
> Description Segment (31) having a Type of Property Loss (14) of
> Recovered ("5"), there MUST also be a corresponding Property Description
> Segment (31) with a matching Property Description (15) code and a Type
> of Property Loss (14) of Stolen/Etc. (\"7\"). This applies to both
> initial submissions and resubmissions for Incident Reports (Action Type
> of "I").\
> \
> This rule does not apply, of course, for Offenses that allow for
> property to be Recovered without first being Stolen. Specifically, it
> does not apply to NIBRS Offense codes of 280 and 250. Nor does it apply
> when a Property Description of hicle Parts/Accessories (\"38\") is
> subsequently reported as Recovered when a vehicle was stolen, and
> individual parts within a vehicle were not reported as Stolen. **Error**
> **10072**
>
> 6\) When the Type of Property Loss is

-   Burned (\"2\")

-   Counterfeited/Forged (\"3\"),

-   Destroyed /Damaged/Vandalized (\"4\")

-   Recovered (\"5\")

-   Seized (\"6\")

-   Stolen/Etc. (\"7\")

    then the following data elements in the Property Description
    Segment (31) must have applicable entries

<!-- -->

-   Property Description (15)

-   Value of Property (16)

-   Date Recovered (17)

-   Number of Stolen Motor Vehicles (18)

-   Number of Recovered Motor Vehicles (19)

-   Suspected Drug Type (20)

-   Estimated Drug Quantity (21)

-   Type of Drug Measurement (22)\
    **\
    Error 13072**

> 7\) When making a Time-Window Submission (Action Type of \"W\") or
> Modifying a previously submitted incident (Action Type of \"M\"), then
> Type of Property Loss/Etc. (14) must be Recovered (\"5\"). **Error
> 13078**
>
> **8) When there is only one completed *Crime Against Property* Offense
> in an incident, any Property Description Segments (31) reported with
> the incident can contain ONLY values of [either]{.underline} Stolen
> Property ("7") or Unknown (\"8\"), but not a combination of the two.
> The incident will be rejected if an agency sends both Stolen Property
> (\"7\") and Unknown (\"8\") for Type of Property Loss/Etc. within the
> same incident.\
> Error 84203, 84304, 84312\
> **
>
> **9) To ensure that Drug/Narcotic Offenses (NIBRS 35A and 35B) are
> properly reported, Property Description (15) CANNOT have a value of
> Drug/Narcotic Equipment (\"11\") for a Drug/Narcotic Violation of
> NIBRS 35A. Similarly, Drug/Narcotics (\"10\") CANNOT be entered for a
> Drug Equipment Violation of (35B). This is enforced by software when
> there is a single *Crime Against Property* Offense.**
>
> **However, when an incident contains multiple *Crimes Against
> Property* Offenses, where, for example, one Offense is a Drug/Narcotic
> Violation (NIBRS 35A), and the other is a Robbery (NIBRS 120), that
> involves Drug/Narcotic Equipment (\"11\"), it can be entered. In this
> case, the above edit rule should be bypassed. Similarly,
> Drugs/Narcotics (\"10\") can be entered along with a Drug Equipment
> Violation (35B), as long as that property is involved in the Robbery
> (NIBRS 120). Error 13087**
>
> **10) The Type of Property Loss code (14) must be applicable to
> Offense(s) submitted in Louisiana Revised Statutes (6). Refer to
> [Mandatories]{.underline} for the correct values to use for each of
> the offenses. Error 10081**

  --- ---------------------------------------------------------------------------------------------------------------------------------------------
  1   None
  2   Burned (includes damage caused in fighting the fire)
  3   Counterfeited/Forged
  4   Destroyed/Damaged/Vandalized
  5   Recovered (to impound property that was previously stolen)
  6   Seized (to impound property that was not previous stolen, 250, 35A, 35B, and 39A-39D are the only offenses that will be accepted as seized)
  7   Stolen/Etc. (includes bribed, defrauded, embezzled, extorted, ransomed, robbed
  8   Unknown
  --- ---------------------------------------------------------------------------------------------------------------------------------------------

**Allowed Entries:** Enter only one (1) code **for each Property
Description Segment. However, as many property segments as applicable
can be submitted per incident:**

**\
**

### Property Description (15)

**Data Characteristics:** 2 Character **Alpha/**Numeric

**Requirements:**

> 1\) MUST be a valid code. **Error** **13004**
>
> 2\) If more than one code entered, CANNOT be duplicates. **Error**
> **13006**
>
> 3\) When Pending Inventory (\"88\") is entered, then Value of Property
> (16) must be Unknown (\"1\", representing \$1.00). One dollar is used as
> a quality assurance edit check that instructs LIBRS to accept the
> Pending Inventory (\"88\") entry.\
> **Error** **13053**
>
> 4\) A Property Description (15) code must be entered when the value
> entered in Type of Property Loss/Etc. (14) contains the following:

-   Burned ("2")

-   Counterfeited or Forged ("3")

-   Destroyed, Damaged or Vandalized ("4")

-   Recovered ("5")

-   Seized ("6")

-   Stolen/Etc. ("7").

> **Error** **13075**
>
> 5\) For every Property Description code (15) entered into a Property
> Description Segment (31) having a Type of Property Loss (14) of
> Recovered ("5"), there MUST also be a corresponding Property Description
> Segment (31) with a matching Property Description (15) code and a Type
> of Property Loss (14) of Stolen/Etc. (\"7\"). This applies to both
> initial submissions and resubmissions for Incident Reports (Action Type
> of "I").\
> \
> This rule does not apply, of course, for Offenses that allow for
> property to be Recovered without first being Stolen. Specifically, it
> does not apply to NIBRS Offense codes of 280 and 250. Nor does it apply
> when a Property Description of Vehicle Parts/Accessories (\"38\") is
> subsequently reported as Recovered when a vehicle was stolen, and
> individual parts within a vehicle were not reported as Stolen.
> (**Error** **10072, modified)**

**Allowed Entries: Enter one Property Description (15) code per Property
Description (31) Segment, but can enter multiple Property Description
(31) Segments. Do NOT enter duplicate Property Description (15) codes
within an Incident, unless a different Type of Property Loss (14) code
is used. An exception would be if there is more than one Drug that was
Seized in the Incident. However, rules found in the [Mandatory Data
Element Requirements]{.underline} must still be followed.**

+-----------------------------------+-----------------------------------+
| Code                              | Property Description              |
+===================================+===================================+
| 01                                | Aircraft (airplanes, dirigibles,  |
|                                   | gliders, etc.)                    |
+-----------------------------------+-----------------------------------+
| 02                                | Alcohol (alcoholic beverages,     |
|                                   | e.g., beer, wine, liquor, etc.)   |
+-----------------------------------+-----------------------------------+
| 03                                | Automobiles (all vehicles that    |
|                                   | serve the primary purpose of      |
|                                   | transporting people)              |
+-----------------------------------+-----------------------------------+
| 04                                | Bicycles (includes all cycles     |
|                                   | regardless of number of wheels)   |
+-----------------------------------+-----------------------------------+
| 05                                | Buses (motor vehicles that are    |
|                                   | specifically designed, but not    |
|                                   | necessarily used, to transport    |
|                                   | groups of people on a commercial  |
|                                   | basis)                            |
+-----------------------------------+-----------------------------------+
| 06                                | Clothes/Furs (wearing apparel for |
|                                   | human use, including accessories  |
|                                   | such as belts, shoes, scarves,    |
|                                   | ties, etc.)                       |
+-----------------------------------+-----------------------------------+
| 07                                | Computer Hardware/Software        |
|                                   | (computers, computer peripherals, |
|                                   | and storage media)                |
+-----------------------------------+-----------------------------------+
| 08                                | Consumable Goods (expendable      |
|                                   | items to be used by humans for    |
|                                   | nutrition, enjoyment, or hygiene, |
|                                   | e.g., food, beverages, grooming   |
|                                   | products, cigarettes, gasoline,   |
|                                   | firewood, etc.)                   |
+-----------------------------------+-----------------------------------+
| 09                                | Credit/Debit Cards (includes      |
|                                   | automatic teller cards)           |
+-----------------------------------+-----------------------------------+
| 10                                | Drugs/Narcotics                   |
+-----------------------------------+-----------------------------------+
| 11                                | Drug Narcotic Equipment           |
+-----------------------------------+-----------------------------------+
| 12                                | Farm Equipment (tractors,         |
|                                   | combines, etc.)                   |
+-----------------------------------+-----------------------------------+
| 13                                | Firearms (excluding air powered   |
|                                   | or gas powered guns)              |
+-----------------------------------+-----------------------------------+
| 14                                | Gambling Equipment (gambling      |
|                                   | paraphernalia)                    |
+-----------------------------------+-----------------------------------+
| 15                                | Heavy Construction / Industrial   |
|                                   | Equipment                         |
+-----------------------------------+-----------------------------------+
| 16                                | Household Goods (beds, chairs,    |
|                                   | desks, sofas, tables,             |
|                                   | refrigerators, stoves,            |
|                                   | washer/dryers, air conditioning   |
|                                   | and heating equipment, **small    |
|                                   | appliances**, etc.)               |
+-----------------------------------+-----------------------------------+
| 17                                | Jewelry / Precious Metals         |
+-----------------------------------+-----------------------------------+
| 18                                | Livestock (excluding household    |
|                                   | pets, such as cats and dogs)      |
+-----------------------------------+-----------------------------------+
| 19                                | Merchandise (items held for sale) |
+-----------------------------------+-----------------------------------+
| 20                                | Money (legal tender, coins and    |
|                                   | paper currency)                   |
+-----------------------------------+-----------------------------------+
| 21                                | Negotiable Instruments (any       |
|                                   | document, other than currency     |
|                                   | which is payable without          |
|                                   | restriction, e.g., endorsed       |
|                                   | checks, endorsed money orders,    |
|                                   | bearer bonds, etc.)               |
+-----------------------------------+-----------------------------------+
| 22                                | Nonnegotiable Instruments         |
|                                   | (documents requiring further      |
|                                   | action to become negotiable,      |
|                                   | e.g., unendorsed checks, food     |
|                                   | stamps, stocks and bonds, etc.)   |
+-----------------------------------+-----------------------------------+
| 23                                | Office-type Equipment             |
|                                   | (typewriters, cash registers,     |
|                                   | etc.)                             |
+-----------------------------------+-----------------------------------+
| 24                                | Other Motor Vehicles (any other   |
|                                   | motor vehicles, e.g.,             |
|                                   | motorcycles, motor scooters,      |
|                                   | snowmobiles, golf carts, etc.)    |
+-----------------------------------+-----------------------------------+
| 25                                | Purses/Handbags / Wallets         |
+-----------------------------------+-----------------------------------+
| 26                                | Radios/TV\'s/ VCR\'s (includes    |
|                                   | cameras, all stereo and video     |
|                                   | equipment)                        |
+-----------------------------------+-----------------------------------+
| 27                                | Recordings-Audio/Visual (includes |
|                                   | all media capable of reproducing  |
|                                   | audio or video)                   |
+-----------------------------------+-----------------------------------+
| 28                                | Recreational Vehicles (motor      |
|                                   | vehicles that are specifically    |
|                                   | designed, but not necessarily     |
|                                   | used to transport people and also |
|                                   | provide temporary lodging for     |
|                                   | recreational purposes)            |
+-----------------------------------+-----------------------------------+
| 29                                | Structures-Single Occupancy       |
|                                   | Dwellings (houses, town houses,   |
|                                   | duplexes, mobile homes, or other  |
|                                   | private dwellings which are       |
|                                   | occupied by a single person,      |
|                                   | family, house mates, or other     |
|                                   | group)                            |
+-----------------------------------+-----------------------------------+
| 30                                | Structures-Other Dwellings (any   |
|                                   | other residential dwellings not   |
|                                   | meeting the definition of         |
|                                   | \"Single Occupancy Dwellings,\"   |
|                                   | e.g., apartments, tenements,      |
|                                   | flats, boarding houses,           |
|                                   | dormitories, as well as temporary |
|                                   | living quarters, such as hotels,  |
|                                   | motels, inns, etc.)               |
+-----------------------------------+-----------------------------------+
| 31                                | Structures-Other                  |
|                                   | Commercial/Business (stores,      |
|                                   | office buildings, restaurants,    |
|                                   | etc.)                             |
+-----------------------------------+-----------------------------------+
| 32                                | Structures-Industrial/Manufacturi |
|                                   | ng                                |
|                                   | (factories, plants, assembly      |
|                                   | lines, etc.)                      |
+-----------------------------------+-----------------------------------+
| 33                                | Structures- Public/Community      |
|                                   | (colleges, hospitals, jails,      |
|                                   | libraries, meeting halls,         |
|                                   | passenger terminals, religious    |
|                                   | buildings, schools, sports        |
|                                   | arenas, etc.)                     |
+-----------------------------------+-----------------------------------+
| 34                                | Structures-Storage (barns,        |
|                                   | garages, storehouses, warehouses, |
|                                   | etc.)                             |
+-----------------------------------+-----------------------------------+
| 35                                | Structures-Other (any other       |
|                                   | structure not fitting in the      |
|                                   | \"Structures\" descriptions,      |
|                                   |                                   |
|                                   | e.g., outbuildings, monuments,    |
|                                   | buildings under construction,     |
|                                   | etc.)                             |
+-----------------------------------+-----------------------------------+
| 36                                | Tools (hand and power tools)      |
+-----------------------------------+-----------------------------------+
| 37                                | Trucks (motor vehicles            |
|                                   | specifically designed, but not    |
|                                   | necessarily used, to transport    |
|                                   | cargo on a commercial basis)      |
+-----------------------------------+-----------------------------------+
| 38                                | Vehicle Parts/Accessories (motor  |
|                                   | vehicle batteries, engines,       |
|                                   | transmissions, heaters, hubcaps,  |
|                                   | tires, manufacturers\' emblems,   |
|                                   | license plates, side view         |
|                                   | mirrors, radios, antennas, tape   |
|                                   | decks, etc.)                      |
+-----------------------------------+-----------------------------------+
| 39                                | Watercraft (motorboats,           |
|                                   | sailboats, houseboats, etc.)      |
+-----------------------------------+-----------------------------------+
| 41                                | Aircraft Parts/Accessories        |
+-----------------------------------+-----------------------------------+
| 42                                | Artistic Supplies/Accessories     |
+-----------------------------------+-----------------------------------+
| 43                                | Building Materials                |
+-----------------------------------+-----------------------------------+
| 44                                | Camping/Hunting/Fishing           |
|                                   | Equipment/Supplies                |
+-----------------------------------+-----------------------------------+
| 45                                | Chemicals                         |
+-----------------------------------+-----------------------------------+
| 46                                | Collections/Collectibles          |
+-----------------------------------+-----------------------------------+
| 47                                | Crops                             |
+-----------------------------------+-----------------------------------+
| 48                                | Documents/Personal or Business    |
+-----------------------------------+-----------------------------------+
| 49                                | Explosives                        |
+-----------------------------------+-----------------------------------+
| 59                                | Firearm Accessories               |
+-----------------------------------+-----------------------------------+
| 64                                | Fuel                              |
+-----------------------------------+-----------------------------------+
| 65                                | Identity Documents                |
+-----------------------------------+-----------------------------------+
| 66                                | Identity--Intangible              |
+-----------------------------------+-----------------------------------+
| 67                                | Law Enforcement Equipment         |
+-----------------------------------+-----------------------------------+
| 68                                | Lawn/Yard/Garden Equipment        |
+-----------------------------------+-----------------------------------+
| 69                                | Logging Equipment                 |
+-----------------------------------+-----------------------------------+
| 70                                | Medical/Medical Lab Equipment     |
+-----------------------------------+-----------------------------------+
| 71                                | Metals, Non-Precious              |
+-----------------------------------+-----------------------------------+
| 72                                | Musical Instruments               |
+-----------------------------------+-----------------------------------+
| 73                                | Pets                              |
+-----------------------------------+-----------------------------------+
| 74                                | Photographic/Optical Equipment    |
+-----------------------------------+-----------------------------------+
| 75                                | Portable Electronic               |
|                                   | Communications                    |
+-----------------------------------+-----------------------------------+
| 76                                | Recreational/Sports Equipment     |
+-----------------------------------+-----------------------------------+
| 77                                | Other (all other property not     |
|                                   | fitting the above specific        |
|                                   | descriptions. This includes       |
|                                   | \"intangibles\" which are         |
|                                   | anything which CANNOT be          |
|                                   | perceived by the sense of touch;  |
|                                   |                                   |
|                                   | i.e., benefits, a right or        |
|                                   | privilege, a promotion, enhanced  |
|                                   | reputation; or a detriment,       |
|                                   |                                   |
|                                   | e.g., a loss of reputation,       |
|                                   | injured feelings, etc.)           |
+-----------------------------------+-----------------------------------+
| 78                                | Trailers                          |
+-----------------------------------+-----------------------------------+
| 79                                | Watercraft                        |
|                                   | Equipment/Parts/Accessories       |
+-----------------------------------+-----------------------------------+
| 80                                | Weapons--Other                    |
+-----------------------------------+-----------------------------------+
| 88                                | Pending Inventory (property       |
|                                   | description unknown until an      |
|                                   | inventory is conducted)           |
+-----------------------------------+-----------------------------------+
| 99                                | (**G**, Blank ) (special category |
|                                   | to be used by the National NIBRS  |
|                                   | program to compile statistics on  |
|                                   | certain designated types of       |
|                                   | property, e.g., \"CB\" radios,    |
|                                   | which are the object of theft     |
|                                   | fads. Since this code is not      |
|                                   | designated at this time, types of |
|                                   | property should be appropriated   |
|                                   | into another code.)               |
+-----------------------------------+-----------------------------------+

**\
**

### 

### Value of Property (16)

**Data Characteristics:** 9 Character Numeric

**Requirements:**

> 1\) MUST be numeric entry with zero or blank left-fill if entered.
> **Error** **13002**
>
> 2\) If Value of Property (16) is unknown, must enter a value of Unknown
> ("1", representing \$1.00). A value of zero ("0") is allowed only when
> Property Description (15) codes are the following:
>
> ZERO ("0") value is ***required*** for the following:
>
> 09 Credit/Debit Cards
>
> 22 Nonnegotiable Instruments
>
> 48 Documents/Personal or Business
>
> 65 Identity Documents
>
> 66 Identity-Intangible
>
> **Error 13051**
>
> ZERO ("0") value is ***optional*** for the following:
>
> 77 Other
>
> 99 Special Category.
>
> **Error 13051\
> **
>
> 3\) When Property Description (15) has Credit/Debit Cards (\"09\") or
> Nonnegotiable Instruments (\"22\") entered, a ZERO ("0") value is
> required for Value of Property (16). **Error**s **13091**
>
> 4\) If a Value of Property (16) has a code entered, then Property
> Description (15) must be entered. **Error** **13054**
>
> 5\) For Property Description Segments (31) having Type of Property Loss
> (14) entries for both Stolen/Etc. ("7") and Recovered (\"5\"), the
> Recovered \"property\" CANNOT have Value of Property (16) value(s)
> greater than corresponding Stolen "property" Value of Property (16)
> value(s). **Error 10084**
>
> 6\) When Value of Property (16) contains a value that exceeds a LIBRS
> assigned threshold amount, a \"Warning\" message is created. The agency
> is asked to check if the value entered was a data entry error, or if it
> was an intended entry.\
> \
> Also, a Warning message is always produced when the value is \$1,000,000
> or greater. For example, if the value of a property was \$12,000.99 but
> was inadvertently entered as \$1,200,099 in LIBRS submission file, a
> \"Warning\" message will be generated. In this case, the cents were
> entered as whole dollars. **Error 13042**

**Example:** A man purchases a new power saw from the hardware store.
Later that same day someone breaks into his truck and steals the saw.
The saw was purchased for \$95.73. The value of the property would be
rounded to the nearest whole dollar and reported as \"000000056\"-
\$96.00.

**\
**

### 

### Date Recovered (17)

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

**Requirements:**

> 1\) Each component of the date must be valid: months must be 01-12, days
> must be 01-31, and year must include the century (i.e., 19xx, 20xx). In
> addition, days CANNOT exceed maximum for the month (e.g., June CANNOT
> have 31 days). The date CANNOT be greater than that entered within the
> \"Month of Submission\" and \"Year of Submission\" fields on the data
> record. For example, if \"Month of Submission\" and \"Year of
> Submission\" are \"06/1995,\" the recovered date CANNOT contain any date
> 07/01/1995 or greater. **Error** **13007**
>
> 2\) CANNOT be earlier than Incident Date/Hour (3). **Error** **13005**
>
> 3\) If entered, then both Property Description (15) and Value of Property
> (16) must be entered. **Error** **13056**

4\) If entered, Type of Property Loss (14) must be Recovered ("5").
**Error** **13055**

> 5\) Property Description Segments (31) submitted with as part of a
> Time-Window (Action Type of \"W\") CANNOT have a Date Recovered (17)
> before the date which is calculated using the Base Date technique
> (January 1 of the year prior to the current year, or earlier than the
> date the agency started submitting Incident-Based Reporting data). For
> any subsequent Modify (Action Type of \"M") submission of a previously
> submitted Time-Window Submission (Action Type of \"W\"), this edit also
> applies. **Error 137020**

**Example:** On March 28, 2014, three (3) cars were stolen from a used
car lot. One of the cars was recovered on July 1, 2014. On July 24,
2014, the second car was recovered. The date entered into this data
element should be \"07011989\".

**\
**

Number of Stolen Vehicles (18)
------------------------------

**Data Characteristics:** 2 Character **Alpha/Numeric**

**Requirements:**

> 1\) MUST be numeric entry with zero left-fill, if entered. **Error**
> **13002**
>
> 2\) MUST be entered if Louisiana Revised Statute (6) has a NIBRS Offense
> code \[as defined on Master LIBRS/LRS Code Table\] of [240]{.underline}\
> \
> ***[or]{.underline}*** hard coded edit based on Property Description
> (15) having Motor Vehicle codes, and Type of Property Loss/Etc. (14) is
> Stolen (7), and the Louisiana Revised Statute Number MUST BE one of the
> following:
>
> 14:67 14:68 **14:68.4**
>
> **and** Type Property Loss/Etc. (14) must be Stolen/Etc (\"7\") **and
> Offense Attempted/ Completed (7) must also be Completed ("C"). (Error
> 13057**
>
> 3\) Entry MUST be made when Louisiana Revised Statute **(6) has a NIBRS
> Offense code \[as defined on Master LIBRS/LRS Code Table\] of
> [240]{.underline},**
>
> **\
> *[or]{.underline}* hard coded edit based on Property Description (15)
> having Motor Vehicle codes as property being stolen and the Louisiana
> Revised Statute Number MUST BE one of the following:**
>
> **14:67 14:68 14:68.4**
>
> ***[and]{.underline}*** Type Property Loss/Etc. (14) is Stolen/Etc.
> (\"7\") **and Offense Attempted/ Completed (7) is Completed (\"C\").
> Error** **13058**
>
> 4\) Property Description (15) MUST contain at least one of the following
> vehicle codes:
>
> 03 Automobiles
>
> 05 Buses
>
> 24 Other Motor Vehicles
>
> 28 Recreational Vehicles
>
> 37 Trucks.
>
> **Error** **13059**

5\) If more than one vehicle code is entered in Property Description
(15), then Number of Stolen Vehicles (18) must be equal to or greater
than this number of different codes, unless the number of stolen
vehicles is Unknown (\"00\").\
**Error 13088**

> **6) If the Louisiana Revised Statute code (6) of "14:67" is submitted
> *without* a Qualifier [but]{.underline}** Property Description (1**5)
> is one of the following:\
> \
> **03 Automobiles
>
> 05 Buses
>
> 24 Other Motor Vehicles
>
> 28 Recreational Vehicles
>
> 37 Trucks
>
> **then the agency will receive this warning message:\
> WARNING \-- This LRS submitted without a Qualifier and \"03\", \"05\",
> \"24\", \"28\", or \"37\" in DE \# 15 will be reported as Motor
> Vehicle Theft (240).\" If this is not the correct property description
> code resubmit property description code. WARNING 22065\
> **
>
> **7) If the Louisiana Revised Statute code of "14:68" is submitted and
> if Property Description (15) is not equal to:\
> \
> **03 Automobiles
>
> 05 Buses
>
> 24 Other Motor Vehicles
>
> 28 Recreational Vehicles

37 Trucks\
**\
then the agency will receive this warning message:**

> **"WARNING\-- This LRS submitted will be reported as All Other
> Larceny-Theft (23H)." If this is not the correct property description
> code resubmit property description code. WARNING 22071\
> **
>
> **8) If Louisiana Revised Statute code (6) of "14:68" is submitted and
> if Property Description (15) is\
> \
> **03 Automobiles
>
> 05 Buses
>
> 24 Other Motor Vehicles
>
> 28 Recreational Vehicles
>
> 37 Trucks.\
> **\
> which equals Motor Vehicle Theft (240), then the agency would receive
> this warning message:**
>
> **"WARNING\-- This LRS submitted and "03\", "05\", "24\", "28\" or
> "37\", in DE \# 15 will be reported as Motor Vehicle Theft (240)." If
> this is not the correct property description code resubmit property
> description code.**
>
> **WARNING 22072\
> **

9\) Number of Stolen Vehicles (18) must be left blank (G) if the
Louisiana Revised Statute (6) Offense is not reported as a Motor Vehicle
Theft (240) or hard coded edit based on Property Description (15) does
not list one of the following Motor Vehicle codes as Stolen property

> 03 Automobiles
>
> 05 Buses
>
> 24 Other Motor Vehicles
>
> 28 Recreational Vehicles

37 Trucks.\
**Error** **23220**

**\
**

### Number of Recovered Motor Vehicles (19)

**Data Characteristics:** 2 Character **Alpha/Numeric**

**Requirements:**

> 1\) MUST be a numeric entry with zero left-fill if entered. **Error**
> **13002**
>
> 2\) MUST be entered if Louisiana Revised Statute (6) **has a NIBRS
> Offense code \[as defined on Master LIBRS/LRS Code Table\] of
> [240]{.underline}**
>
> ***[or]{.underline}* has a hard-coded edit based on Property
> Description (15) containing a Motor Vehicle code indicating Recovered
> Property and with a Louisiana Revised Statute (6) from the** following
> list:
>
> 14:67 14:68 **14:68.4**
>
> ***[and]{.underline}*** Type of Property Loss (14) is Recovered ("5").
> **Error 13060\
> **
>
> 3\) If number between 01 and 99 is entered, it must be equal to or less
> than the number reported Stolen in Number of Stolen Motor Vehicles (18).
> **Error 10073**
>
> 4\) Entry must be made when Louisiana Revised Statute (**6) has a NIBRS
> Offense code \[as defined on Master LIBRS/LRS Code Table\] of: 240\
> \
> *[or]{.underline}* hard-coded edit based on Property Description (15)
> containing Motor Vehicle codes indicating Recovered property and
> Louisiana Revised Statute (6) MUST BE one of the following:**
>
> 14:67 14:68 **14:68.4**
>
> ***[and]{.underline}*** Type of Property Loss (14) is Recovered ("5"),
> **and Property Description (15) contains a vehicle code. Error 13061**
>
> 5\) When **\"01\" to \"99\" is entered into Number of Recovered Motor
> Vehicles (19), then** Property Description (15) must contain at least
> one of the following vehicle codes:
>
> 03 Automobiles
>
> 05 Buses
>
> 24 Other Motor Vehicles
>
> 28 Recreational Vehicles
>
> 37 Trucks
>
> **Error** **13059**

**6) The Number of Recovered Motor Vehicles (19) must be greater than or
equal to the number of Property Description (15) entries with motor
vehicle designation. For example, if Property Description (15) vehicle
codes of Automobiles ("03") and Buses (\"05\") have corresponding Type
of Property Loss (14) entries of Recovered ("5"), then the Number of
Recovered Motor Vehicles (19) must be at least 2, unless the Number of
Recovered Motor Vehicles (19) is Unknown (\"00\"). Error 13089\
**

> **7) Number of Recovered Motor Vehicles (19) must be left blank if the
> LRS Offense is not reported as a Motor Vehicle Theft (NIBRS 240), or
> Type of Property Loss (14) shows NO Recovered ("5") property with a
> Property Description (15) from the following list of motor vehicle
> codes:**
>
> 03 Automobiles
>
> 05 Buses
>
> 24 Other Motor Vehicles
>
> 28 Recreational Vehicles
>
> 37 Trucks

**Error 23230**

**\
**

### Suspected Drug Type (20)

**Data Characteristics:** 2 Character Alpha

**Requirements:**

> 1\) Suspected Drug Type (20 ) MUST be entered if Louisiana Revised
> Statutes (6) **has a NIBRS offense code \[as defined on Master LIBRS/LRS
> Code Table\] of [35A]{.underline}** and Louisiana Revised Statute (6) is
> one of the following:\
> **\
> 14:30.1/D 32:681 40:694 40:962.1** 40:962.1.1
>
> 40:962.1.2 40:963 40:964 40:964.1 40:966
>
> 40:967 40:968 40:969 40:970 40:971.1
>
> 40:971.2 40:981 40:981.1 40:981.2 40:981.3
>
> 40:982 40:983 40:983.1 40:989 40:989.1
>
> 40:1041 40:1238.1 40:1238.2 40:1238.3
>
> ***[and]{.underline}*** Type of Property Loss (4) has a value of
> Seized (\"6\")\
> ***[and]{.underline}*** Property Description (15) has a value of
> Drugs/Narcotics (\"10\").\
> \
> If there are multiple LRS Offenses (6) listed and Drugs/Narcotics
> ("10") was split between the different types of LRS Offenses (6), only
> enter the Suspected Drug Types (20) applicable to the Offenses listed
> above. **Error** **13065**
>
> 2\) When more than one Suspected Drug Type (20) code is entered, there
> can be NO duplicates. **Error 13006**
>
> 3\) MUST be a valid code. **Error 13004**
>
> 4\) When Louisiana Revised Statute (**6) has a NIBRS Offense code \[as
> defined on Master LIBRS/LRS Code Table\] of [35A]{.underline}** and
> Louisiana Revised Statute (6) is one of the following:
>
> **14:30.1/D 32:681 40:694 40:962.1** 40:962.1.1
>
> 40:962.1.2 40:963 40:964 40:964.1 40:966
>
> 40:967 40:968 40:969 40:970 40:971.1
>
> 40:971.2 40:981 40:981.1 40:981.2 40:981.3
>
> 40:982 40:983 40:983.1 40:989 40:989.1
>
> 40:1041 40:1238.1 40:1238.2 40:1238.3
>
> ***[and]{.underline}***, Type Property Loss (14) is Seized (\"10\"),
> Property Description (15) is Drugs/Narcotics (\"10\"), and a Suspected
> Drug Type (20) is entered,\
> \
> ***[then]{.underline}*** Estimated Quantity (21), Type Drug
> Measurement (22), and Value of Property (16) must be entered. **Error
> 13064\
> **
>
> 5\) When Louisiana Revised Statute **(6) has a NIBRS Offense code \[as
> defined on Master LIBRS/LRS Code Table\] of [35A]{.underline}** and the
> Louisiana Revised Statute (6) is one of the following:
>
> **14:30.1/D 32:681 40:694 40:962.1** 40:962.1.1
>
> 40:962.1.2 40:963 40:964 40:964.1 40:966
>
> 40:967 40:968 40:969 40:970 40:971.1
>
> 40:971.2 40:981 40:981.1 40:981.2 40:981.3
>
> 40:982 40:983 40:983.1 40:989 40:989.1
>
> 40:1041 40:1238.1 40:1238.2 40:1238.3
>
> ***[and]{.underline}*** Type Property Loss (14) is None (\"1\")
>
> ***[then]{.underline}*** Suspected Drug Type (20) is required.\
> \
> ***[However]{.underline}***, if Type Property Loss (14) of Seized
> (\"6\") is also reported, this edit is bypassed. **Error**s **13092**
>
> 6\) Second character must be \"X\" (indicates Counterfeit), or Blank G.
> **Error 23201**

**Allowed Entries:** Enter as many as apply, but do not duplicate codes.

  ---------------------- ---------------------------------- --------------------------- -------------------------------------------
  **Allowed Entries:**   **Description:**                   **Reported to NIBRS as:**   **Drug Measurement Category to be Used:**
  A                      Crack Cocaine                      A                           WEIGHT
                                                                                        
  B                      Cocaine (all forms except crack)   B                           WEIGHT
                                                                                        
  C                      Hashish                            C                           WEIGHT
                                                                                        
  D                      Heroin                             D                           WEIGHT
                                                                                        
  E                      Marijuana                          E                           WEIGHT
                                                                                        
  F                      Morphine                           F                           CAPACITY
                                                                                        
  G                      Opium                              G                           WEIGHT
                                                                                        
  H                      Other Narcotics                    H                           UNITS
                                                                                        
  I                      LSD                                I                           UNITS
                                                                                        
  J                      PCP                                J                           CAPACITY
                                                                                        
  K                      Other Hallucinogens                K                           UNITS
                                                                                        
  L                      Amphetamines / Methamphetamines    L                           WEIGHT
                                                                                        
  M                      Other Stimulants                   M                           UNITS
                                                                                        
  N                      Barbiturates                       N                           UNITS
                                                                                        
  O                      Other Depressants                  O                           UNITS
                                                                                        
  P                      Other Drugs                        P                           UNITS
                                                                                        
  U                      Unknown Type Drug                  U                           any
                                                                                        
  ---------------------- ---------------------------------- --------------------------- -------------------------------------------

**\
**

Estimated Drug Quantity (21)
----------------------------

**Data Characteristics:** 13 Character **Alpha/Numeric**

**Format:** \#\#\#\#\#\#\#\#\#.\#\#\#

**Requirements:**

> 1\) MUST be numeric entry with Zero ("0") or Blank (G) left-fill and
> right-fill. The [decimal fractional quantity must be expressed in
> thousandths as three digits]{.underline}, and [a decimal point must
> separate the whole part of the number from the fractional
> part.]{.underline} The decimal point must be the tenth character of the
> field.\
> **Error 13002**

2\) When Estimated Drug Quantity (21) is entered, Suspected Drug Type
(20), Type Drug Measurement (22) and Value of Property (16) must also be
entered.\
**Error** **13066**

> 3\) Estimated Drug Quantity (21) is valid only if Louisiana Revised
> Statute (**6) has a NIBRS Offense code \[as defined on Master LIBRS/LRS
> Code Table\] of [35A]{.underline}** and Louisiana Revised Statute (6)
> that is one of the following:
>
> **14:30.1/D 32:681 40:694 40:962.1** 40:962.1.1
>
> 40:962.1.2 40:963 40:964 40:964.1 40:966
>
> 40:967 40:968 40:969 40:970 40:971.1
>
> 40:971.2 40:981 40:981.1 40:981.2 40:981.3
>
> 40:982 40:983 40:983.1 40:989 40:989.1
>
> 40:1041 40:1238.1 40:1238.2 40:1238.3
>
> ***[and]{.underline}***, Type of Property Loss (14) is
> [Seized]{.underline} (\"6\"), and Property Description (15) is
> Drugs/Narcotics (\"10\"). **Error 13065**

###  Type Drug Measurement (22)

**Data Characteristics:** 2 Character Alpha

**Requirements:**

> 1\) MUST be a valid code, if entered. **Error 13004**
>
> 2\) Type Drug Measurement (22) is used if Louisiana Revised Statute (**6)
> has a NIBRS Offense code \[as defined on Master LIBRS/LRS Code Table\]
> of [35A]{.underline}** and the Louisiana Revised Statute (6) is one of
> the following:
>
> **14:30.1/D 32:681 40:694 40:962.1** 40:962.1.1
>
> 40:962.1.2 40:963 40:964 40:964.1 40:966
>
> 40:967 40:968 40:969 40:970 40:971.1
>
> 40:971.2 40:981 40:981.1 40:981.2 40:981.3
>
> 40:982 40:983 40:983.1 40:989 40:989.1
>
> 40:1041 40:1238.1 40:1238.2 40:1238.3
>
> ***[and]{.underline}*** Type of Property Loss (14) is Seized ("6"),\
> ***[and]{.underline}*** Property Description (15) is Drugs/Narcotics
> (\"10\"[)]{.underline}.\
> **Error 13065**
>
> 3\) Each Suspected Drug Type (DE20) can only be measured using its
> corresponding measurement category. **Error 20003**
>
> 4\) When Type Drug Measurement is entered, then Suspected Drug Type (20),
> Estimated Drug Quantity (21), and Value of Property (16) must also be
> completed.\
> **Error 13068**
>
> 5\) Estimated Drug Quantity (21) must have a value of \"000000001.000\"
> when Type Drug Measurement (22) is Not Reported (\"XX\") and Value of
> Property (16) is Unknown (\"1\"). Submission of a Not Reported("XX") for
> Type Drug Measurement (22) requires that a value of \"000000001.000\"
> also be submitted for Estimated Drug Quantity (21) as a quality
> assurance check. Once the Type Drug Measurement (22) has been
> determined, the Incident will need to be [resubmitted]{.underline}
> reflecting the completed data. **Error 13084\
> **

**Allowed Entries:**

+-----------------------------------+-----------------------------------+
| Type Drug Measurements            |                                   |
+===================================+===================================+
| Weight Category                   |                                   |
+-----------------------------------+-----------------------------------+
| GM                                | Gram                              |
+-----------------------------------+-----------------------------------+
| KG                                | Kilogram                          |
+-----------------------------------+-----------------------------------+
| OZ                                | Ounce                             |
+-----------------------------------+-----------------------------------+
| LB                                | Pound                             |
+-----------------------------------+-----------------------------------+
|                                   |                                   |
+-----------------------------------+-----------------------------------+
| Capacity Category                 |                                   |
+-----------------------------------+-----------------------------------+
| ML                                | Milliliter                        |
+-----------------------------------+-----------------------------------+
| LT                                | Liter                             |
+-----------------------------------+-----------------------------------+
| FO                                | Fluid Ounce                       |
+-----------------------------------+-----------------------------------+
| GL                                | Gallon                            |
+-----------------------------------+-----------------------------------+
|                                   |                                   |
+-----------------------------------+-----------------------------------+
| Units Category                    |                                   |
+-----------------------------------+-----------------------------------+
| DU                                | Dosage Units/Items (Number of     |
|                                   | Capsules, Pills, Tablets, etc.)   |
+-----------------------------------+-----------------------------------+
| NP                                | Number of Plants (e.g. Marijuana  |
|                                   | plants (bushes), etc.             |
+-----------------------------------+-----------------------------------+
| NC                                | Number of Cigarettes              |
|                                   |                                   |
|                                   | (Marijuana cigarettes only)       |
+-----------------------------------+-----------------------------------+
|                                   |                                   |
+-----------------------------------+-----------------------------------+
| Other                             |                                   |
+-----------------------------------+-----------------------------------+
| XX                                | Not Reported/Unknown              |
+-----------------------------------+-----------------------------------+

**\
**

### Victim Sequence Number (23)

**Data Characteristics:** 3 Character Numeric

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error 15001\
> **
>
> 2\) MUST be numeric entry (001 through 999) with zero left-fill. The
> purpose of Victim Sequence Number is to distinguish one victim from
> another. **Error 15002\
> **
>
> 3\) MUST be unique - can NOT have duplicates. **Error 15051**

**\
**

## Offense Connected to Victim Sequence Number (24)

**Data Characteristics:** 3 Character Numeric

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error** **15001**
>
> 2\) MUST be a valid code. **Error** **15004**
>
> 3\) If the Offense is a *Crime Against Person*, and the Offense is
> **connected to a Victim,** then Type of Victim (25) must be an
> Individual ("I") or **Law Enforcement Officer (\"L\"[)]{.underline}.
> Error 15064**
>
> 4\) If the Offense is a *[Crime Against Society]{.underline}*, and the
> Offense is **connected to a Victim,** then Type of Victim (**25**) must
> be Society ("S"). **Error** **15065**
>
> 5\) Each Offense Connected to Victim Sequence Number (24) entered in the
> Offense Segment (20) must also have a corresponding Victim Sequence
> Number (23 ) entered in a Victim Segment (50). **Error 15066**
>
> **6) When Offense Connected to Victim Sequence Number (24) relates to
> the Offense of Simple Assault (NIBRS \"13B\"[)]{.underline}, there
> [CANNOT be \"major\" injury codes indicating an]{.underline}
> Aggravated Assault. The permissible codes are Apparent Minor Injury
> (\"M\") and [None (]{.underline}\"N\"[)]{.underline}. Error 15079**
>
> **7) Each Offense Segment (20) must have a corresponding Victim
> segment (50).\
> Error 10065**
>
> 8\) Victim CANNOT be connected to [Mutually Exclusive]{.underline} or
> [Lesser Included]{.underline} Offenses.\
> **Error 15078**
>
> Offenses are [Mutually Exclusive]{.underline} when they CANNOT occur
> to the same victim in an incident by NIBRS definitions.\
> \
> Offenses are [Lesser Included]{.underline} when, in the same incident,
> one Offense is an element of a second Offense, and should not both be
> reported as having happened to the Victim.
>
> The chart on the following page shows Offenses that CANNOT occur to
> the same victim in the same incident. Each \"X\" on the chart where
> offenses intersect denotes that those two offenses CANNOT occur to the
> same victim in an incident.

<table>
<tbody>
<tr class="odd">
<td>09A Murder</td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>09B Negligent Manslaughter</td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>11A Forcible Rape</td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
</tr>
<tr class="even">
<td>11B Forcible Sodomy</td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
</tr>
<tr class="odd">
<td>11C Sexual Assault w/ Object</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
</tr>
<tr class="even">
<td>11D Forcible Fondling</td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
</tr>
<tr class="odd">
<td>120 Robbery</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>13A Aggravated Assault</td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>13B Simple Assault</td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>13C Intimidation</td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>23A Pocket-Picking</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>23B Purse Snatching</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>23C Shoplifting</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>23D Theft from Building</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>23E Theft from Coin Machine</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>23F Theft from Motor Vehicle</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>23G Theft of Motor Vehicle Parts</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>23H All Other Larceny</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>240 Motor Vehicle Theft</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>36A Incest</td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td></td>
</tr>
<tr class="odd">
<td>36B Statutory Rape</td>
<td></td>
<td></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td><strong>X</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>X</strong></td>
</tr>
<tr class="even">
<td><p>09C Justifiable Homicide</p>
<p>CANNOT occur</p>
<p>with any other offense.</p></td>
<td><blockquote>
<p>09A Murder</p>
<p>09A--Murder</p>
</blockquote></td>
<td><blockquote>
<p>09B Negligent Manslaughter</p>
<p>09B--Negligent Manslaughter</p>
</blockquote></td>
<td><blockquote>
<p>11A Forcible Rape</p>
<p>11A--Forcible Rape</p>
</blockquote></td>
<td><blockquote>
<p>11B Forcible Sodomy</p>
<p>11B--Forcible Sodomy</p>
</blockquote></td>
<td><blockquote>
<p>11C Sexual Assault w/ Object</p>
<p>11C--Sexual Assault w/ Object</p>
</blockquote></td>
<td><blockquote>
<p>11D Forcible Fondling</p>
<p>11D--Forcible Fondling</p>
</blockquote></td>
<td><blockquote>
<p>120 Robbery</p>
<p>120--Robbery</p>
</blockquote></td>
<td><blockquote>
<p>13A Aggravated Assault</p>
<p>13A--Aggravated Assault</p>
</blockquote></td>
<td><blockquote>
<p>13B Simple Assault</p>
<p>13B--Simple Assault</p>
</blockquote></td>
<td><blockquote>
<p>13C Intimidation</p>
<p>13C--Intimidation</p>
</blockquote></td>
<td><blockquote>
<p>23A Pocket-Picking</p>
<p>23A--Pocket-Picking</p>
</blockquote></td>
<td><blockquote>
<p>23B Purse Snatching</p>
<p>23B--Purse Snatching</p>
</blockquote></td>
<td><blockquote>
<p>23C Shoplifting</p>
<p>23C--Shoplifting</p>
</blockquote></td>
<td><blockquote>
<p>23D Theft from Building</p>
<p>23D--Theft from Building</p>
</blockquote></td>
<td><blockquote>
<p>23E Theft from Coin Machine</p>
<p>23E--Theft from Coin Machine</p>
</blockquote></td>
<td><blockquote>
<p>23F Theft from Motor Vehicle</p>
<p>23F--Theft from Motor Vehicle</p>
</blockquote></td>
<td><blockquote>
<p>23G Theft of Motor Vehicle Parts</p>
<p>23G--Theft of Motor Vehicle Parts</p>
</blockquote></td>
<td><blockquote>
<p>23H All Other Larceny</p>
<p>23H--All Other Larceny</p>
</blockquote></td>
<td><blockquote>
<p>240 Motor Vehicle Theft</p>
<p>240--Motor Vehicle Theft</p>
</blockquote></td>
<td><blockquote>
<p>36A Incest</p>
<p>36A--Incest</p>
</blockquote></td>
<td><blockquote>
<p>36B Statutory Rape</p>
<p>36B--Statutory Rape</p>
</blockquote></td>
</tr>
</tbody>
</table>

**Example:** Two victims, Victim 001 and Victim 002, were robbed, and
Victim 001 was also taken hostage by the Offender with a hand gun in a
parking lot. The incident\'s Offense Segments could be submitted as
follows:\
\
Offense 001 -- Aggravated Robbery (14:64) would be connected to Victim
001.\
\
Offense 002 - Aggravated Robbery (14:64) would be connected to Victim
002.\
\
Offense 003 - Second Degree Kidnaping (14:44.1) would be connected to
Victim 001.

**\
**

### Type of Victim (25)

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error 15001\
> **
>
> 2\) MUST be a valid code. **Error 15004\
> **
>
> 3\) When Offense Connected to Victim Sequence Number (24) is a *Crime
> Against Person*, and the Offense is **connected to a Victim, then Type
> of Victim (25) must be Individual (\"I\") or Law Enforcement Officer
> (\"L\").\
> Error 15064 \*\*\*Modified Error Message\*\*\*\
> **
>
> **4) When Offense is a *Crime Against Society*, and the Offense is
> connected to a Victim, then Type of Victim (25) must be Society
> (\"S\"[)]{.underline}. Error 15065\
> **
>
> **5) When Offense is a *Crime Against Property*, and the Offense is
> connected to a Victim, then Type of Victim (25) CANNOT be Society
> ("S\"[)]{.underline}. Type of Victim (25) can only be:\
> **
>
> I Individual
>
> B Business
>
> F Financial Institution
>
> G Government
>
> R Religious Organization
>
> O Other
>
> U Unknown
>
> **Error 15067\
> **
>
> **6) *Crimes Against Society* can have only one Victim. Error 10080**
>
> **7) Type of Victim (25) must be Law Enforcement Officer
> (\"L\"[)]{.underline} when submitting the following Louisiana Revised
> Statute codes:**
>
> **14:37.2 14:34.6 14:34.2.**
>
> **Error 22110**
>
> **8) Type of Victim (25) CANNOT be Law Enforcement Officer (\"L\"),
> unless Offense Connected to Victim Sequence Number (24) is one of the
> following NIBRS codes:\
> \
> 09A Murder and Non-negligent Manslaughter\
> 13A Aggravated Assault\
> 13B Simple Assault\
> 13C Intimidation.**
>
> **Error 22251 \*\*\*New Error Message\*\*\***
>
> **9) For Human Trafficking Offenses (NIBRS Codes 64A, 64B and 40C),
> the data value for Type of Victim (25) must be Individual (\"I\").\
> **
>
> **10) When Type of Victim (25) is Law Enforcement Officer (\"L\") and
> Offense Connected to Victim Sequence Number (24) is one of the
> following NIBRS codes:\
> \
> 09A Murder and Non-negligent Manslaughter\
> 13A Aggravated Assault\
> 13B Simple Assault\
> 13C Intimidation.\
> \
> then, Incident Date/Hour (3) MUST be populated with a valid hour
> (00-23) and CANNOT BE BLANK.**
>
> **Error 22252 \*\*\*New Error Message\*\*\***
>
> **Allowed Entries:** Enter only one (1) code per Victim Segment (50):

  --- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  I   Individual
  B   Business
  F   Financial Institution
  G   Government
  L   Law Enforcement Officer **(used to identify LEOKA assaults and homicides to Law Enforcement Officers In-the-Line-of-duty) reported to NIBRS as an Individual ("I").**
  R   Religious Organization
  S   Society/Public
  O   Other
  U   Unknown
  --- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Example:** During a bank robbery *(Crime Against Property)*, the
Offender pointed a gun at a teller and demanded and received money. The
robber also pistol-whipped a customer who stood in his way as he made
his getaway from the bank.\
\
Assuming the facts above, there were [three]{.underline} victims:

Victim 001 was the bank which would be coded as a Financial Institution
(\"F\"[)]{.underline}

Victim 002 was the teller which would be coded as Individual (\"I\")

Victim 003 was the customer who was pistol whipped which would be coded
as

an Individual (\"I\")

**\
**

Type of Officer Activity/Circumstance (25A)
-------------------------------------------

**\*\*\* New Data Element in LIBRS 2.5 \*\*\***

**Data Characteristics: 2** Character Alpha

**Requirements:**

> 1\) MUST contain a valid data value when entered**.\
> Error 15004 \*\*\*New Error Message\*\*\*\
> **
>
> **2) When Type of Victim (25) is Law Enforcement Officer (\"L\"), then
> Type of Officer Activity/Circumstance (25A) CANNOT BE BLANK.\
> Error 10001 \*\*\*New Error Message\*\*\***
>
> 3\) **When Type of Victim (25) [IS NOT]{.underline}** **Law Enforcement
> Officer (\"L\") or Individual ("I"), then Type of Officer
> Activity/Circumstance (25A) MUST BE BLANK**.\
> **Error 10255 \*\*\*New Error Message\*\*\***

**Allowed Entries:** Enter only one (1) code for each Victim Segment:

+-----------------------+-----------------------+-----------------------+
| Officer               | Valid NIBRS Offense   |                       |
| Activity/Circumstance | Codes                 |                       |
|                       |                       |                       |
|                       | for LIBRS Validation  |                       |
+=======================+=======================+=======================+
| 01                    | Responding to         | 09A, 13A, 13B, 13C    |
|                       | Disturbance Call      |                       |
+-----------------------+-----------------------+-----------------------+
| 02                    | Burglaries in         | 09A, 13A, 13B, 13C    |
|                       | Progress or Pursuing  |                       |
|                       | Burglary Suspects     |                       |
+-----------------------+-----------------------+-----------------------+
| 03                    | Robberies in Progress | 09A, 13A, 13B, 13C    |
|                       | or Pursuing Robbery   |                       |
|                       | Suspects              |                       |
+-----------------------+-----------------------+-----------------------+
| 04                    | Attempting Other      | 09A, 13A, 13B, 13C    |
|                       | Arrests               |                       |
+-----------------------+-----------------------+-----------------------+
| 05                    | Civil Disorder        | 09A, 13A, 13B, 13C    |
+-----------------------+-----------------------+-----------------------+
| 06                    | Handling,             | 09A, 13A, 13B, 13C    |
|                       | Transporting, Custody |                       |
|                       | of Prisoners          |                       |
+-----------------------+-----------------------+-----------------------+
| 07                    | Investigating         | 09A, 13A, 13B, 13C    |
|                       | Suspicious Persons or |                       |
|                       | Circumstances         |                       |
+-----------------------+-----------------------+-----------------------+
| 08                    | Ambush No Warning     | 09A, 13A, 13B, 13C    |
+-----------------------+-----------------------+-----------------------+
| 09                    | Mentally Deranged     | 09A, 13A, 13B, 13C    |
|                       | Assailant             |                       |
+-----------------------+-----------------------+-----------------------+
| 10                    | Traffic Pursuits and  | 09A, 13A, 13B, 13C    |
|                       | Stops                 |                       |
+-----------------------+-----------------------+-----------------------+
| 11                    | All Other             | 09A, 13A, 13B, 13C    |
+-----------------------+-----------------------+-----------------------+

**\
**

### Officer Assignment Type (25B)

**\*\*\* New Data Element in LIBRS 2.5 \*\*\***

**Data Characteristics: 1** Character Alpha

**Requirements:**

> 1\) MUST contain a valid data value when entered**.\
> Error 10256 \*\*\*New Error Message\*\*\*\
> **
>
> **2) When Type of Victim (25) is Law Enforcement Officer (\"L\"), then
> Officer Assignment Type (25B) CANNOT BE BLANK.\
> Error 10257 \*\*\*New Error Message\*\*\***
>
> 3\) **When Type of Victim (25) [IS NOT]{.underline}** **Law Enforcement
> Officer (\"L\") or Individual ("I"), then Officer Assignment Type (25B)
> MUST BE BLANK**.\
> **Error10258 \*\*\*New Error Message\*\*\***

**Allowed Entries:** Enter only one (1) code for each Victim Segment:

+-----------------------+-----------------------+-----------------------+
| Officer Assignment    | Valid NIBRS Offense   |                       |
| Type                  | Codes                 |                       |
|                       |                       |                       |
|                       | for LIBRS validation  |                       |
+=======================+=======================+=======================+
| F                     | Two-Officer Vehicle   | 09A, 13A, 13B, 13C    |
+-----------------------+-----------------------+-----------------------+
| G                     | One-Officer Vehicle   | 09A, 13A, 13B, 13C    |
|                       | (Alone)               |                       |
+-----------------------+-----------------------+-----------------------+
| H                     | One-Officer Vehicle   | 09A, 13A, 13B, 13C    |
|                       | (Assisted)            |                       |
+-----------------------+-----------------------+-----------------------+
| I                     | Detective or Special  | 09A, 13A, 13B, 13C    |
|                       | Assignment (Alone)    |                       |
+-----------------------+-----------------------+-----------------------+
| J                     | Detective or Special  | 09A, 13A, 13B, 13C    |
|                       | Assignment (Assisted) |                       |
+-----------------------+-----------------------+-----------------------+
| K                     | Other (Alone)         | 09A, 13A, 13B, 13C    |
+-----------------------+-----------------------+-----------------------+
| L                     | Other (Assisted)      | 09A, 13A, 13B, 13C    |
+-----------------------+-----------------------+-----------------------+

**\
**

Officer ORI, Other Jurisdiction (25C)
-------------------------------------

**\*\*\* New Data Element in LIBRS 2.5 \*\*\***

**Data Characteristics: 9** Character Alpha

**Requirements:**

> 1\) MUST be a valid 9-character NCIC number, where the last 2 positions
> of the ORI must reflect \"00\" for all state and local agencies**.\
> Error 10259 \*\*\*New Error Message\*\*\*\
> **
>
> **2) When Type of Victim (25) [IS NOT]{.underline}** **Law Enforcement
> Officer (\"L\") or Individual ("I"), then Officer ORI, Other
> Jurisdiction (25C) MUST BE BLANK**.\
> **Error 10254 \*\*\*New Error Message\*\*\***

**Allowed Entries:** Enter only one (1) code for each Victim Segment:

**Acceptable Data Values:** A thru Z (Uppercase letter only), or 0 thru
9

**\
**

### Age of Victim (26)

### \[At Time Incident Occurred\]

**Data Characteristics:** 3 Character Alpha

**Requirements:**

> 1\) MUST be present when Type of Victim (25) is Individual (\"I\") **or
> Law Enforcement Officer (\"L\"). Error 15053\
> **
>
> **2) Type of Victim (25) MUST be Individual (\"I\") or Law Enforcement
> Officer (\"L\") for data to be entered. Error 15058**
>
> 3\) When Relationship of Victim to Offender (35) contains a relationship
> of Spouse (\"SE\"), then the Victim CANNOT be less than 10 years old.
> **Error** **15050**
>
> 4\) [Exact Age]{.underline}
>
> A MUST be a valid code if alpha characters, i.e., NN, NB, or BB.
> **Error** **15004**\
> ***[or]{.underline}***
>
> B A single two-character age must be in first two positions of the
> field. The third position must be blank. **Error** **15008**
>
> 5\) [Estimated Age]{.underline}
>
> A MUST be 2 numeric digits, and have a trailing \"E\". **Error**
> **15009**\
> ***[or]{.underline}***
>
> B Age CANNOT be an estimate if Date of Birth of Victim (L26) is
> entered, and Incident Date/Hour (3) is an actual Incident Date (that
> is, not a Report date (\"R\")). **Error** **25010**\
> ***[or]{.underline}***
>
> C The estimated age CANNOT be Unknown ("00") and have a trailing
> \"E\".\
> **Error** **15022**
>
> 6\) Statutory Rape Victim's Age (26) must be 12 years to 16 years.
> **Error 15081**

**Allowed Entries:** Enter only one (1) code for each Victim Segment:

  Valid Ages of Victims   
  ----------------------- --------------------------------------------------
  NN                      Under 24 Hours (neonate)
  NB                      1-6 Days Old (new born)
  BB                      7-364 Days Old (baby)
  01 to 98                Years Old (age in years)
  99                      Over 98 Years Old
  00                      Unknown (CANNOT have \"E\" with this data value)

**Example:**

\(1) If the victim was 18 years old, enter \"18\".

\(2) If the victim appeared 25 to 30 years old, [average the age
range]{.underline} to get 27.5, then [round down]{.underline} and enter
"27E".

### Date of Birth of Victim (L26)

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

**Requirements:**

> 1\) Each component of the date must be valid (that is, months must be
> 01-12, days must be 01-31, and year must include the century (e.g.,
> 19xx, 20xx)). In addition, days CANNOT exceed maximum for the month
> (e.g., June CANNOT have 31 days). The date CANNOT be greater than that
> entered within the *Month of Data Submission* and *Year of Data
> Submission* field on the data record. For example, if *Month of Data
> Submission* and *Year of Data Submission* are \"06/2014, the Date of
> Birth of Victim (L26) CANNOT contain any date 07/01/2014 or greater.
> **Error** **25030**

2\) MUST be on or before Incident Date/Hour (3). **Error 25031**

3\) If entered, and Incident Date/Hour (3) contains the actual incident
date, then Age of Victim (26) *at the time of the incident* must be an
exact age. **Error** **25010**

> 4\) Type of Victim (25) must be Individual (\"I\") **or Law Enforcement
> Officer** (**\"L\"**) for data to be entered. **Error** **15058**

Sex of Victim (27)
------------------

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be a valid code. **Error** **15004**
>
> 2\) MUST be present if Type of Victim (25) is Individual (\"I\") **or Law
> Enforcement Officer [(]{.underline}\"L\"[)]{.underline}. Error**
> **15053**
>
> 3\) Type of Victim (25) must be Individual (\"I\") **or Law Enforcement
> Officer** (**\"L\"**) for data to be entered in Sex of Victim (27).
> **Error** **15058**
>
> **4) Sex of Victim (27) must be Male (\"M\") or Female (\"F\") to be
> Connected to Offense codes of Forcible Rape (\"11A\") and Statutory
> Rape (\"36B\"). Error 15069**

**Allowed Entries:** Enter only one (1) code **for each Victim
Segment:**

  Sex of Victim   
  --------------- ---------
  M               Male
  F               Female
  U               Unknown

### Race of Victim (28)

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be a valid code. (**Error** **15004**)
>
> 2\) MUST be present if Type of Victim (25) is Individual (\"I\") **or Law
> [ ]{.underline} Enforcement Officer (\"L\")**. **Error** **15053**
>
> 3\) Type of Victim (25) MUST be Individual (\"I\") or Law Enforcement
> Officer (\"L\") for data to be entered. **Error** **15058**

**Allowed Entries:** Enter only one (1) code for each Victim Segment:

  Race of Victim   
  ---------------- -------------------------------------------
  W                White
  B                Black
  I                American Indian / Alaskan Native
  A                Asian / Pacific Islander
  P                Native Hawaiian or Other Pacific Islander
  U                Unknown

Ethnicity of Victim (29)
------------------------

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be a valid code. **Error** **15004**
>
> 2\) Type of Victim (25) MUST be Individual (\"I\") **or Law Enforcement
> Officer (\"L\") in order for data to be entered into Ethnicity of Victim
> (29). Error 15058**

**Allowed Entries:** Enter only [one]{.underline} code for each Victim
Segment:

  Ethnicity of Victim   
  --------------------- ------------------------
  H                     Hispanic Origin
  N                     Not of Hispanic Origin
  U                     Unknown

### Resident Status of Victim (30)

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be a valid code. **Error 15004**
>
> 2\) Type of Victim (25) MUST be Individual **(**\"I\"**) or Law
> Enforcement Officer** (**\"L\"**) for data to be entered. **Error
> 15058**

**Allowed Entries:** Enter only [one]{.underline} code for each Victim
Segment:

  Resident Status of Victim   
  --------------------------- -------------
  R                           Resident
  N                           Nonresident
  U                           Unknown

Aggravated Assault/Homicide Circumstance
----------------------------------------

## Nos. 1 and 2 (31)
-----------------

**\*\*\* Assault on Law Enforcement Officer (Shaded Brown) is a new
Aggravated Assault and Non-Negligent Manslaughter Circumstance,
beginning with LIBRS Spec 2.5. \*\*\***

Data Characteristics: 2 Character Numeric

Requirements:

> 1\) MUST contain numeric entry with ZERO left-fill. **Error 15002
> \*\*\*New Error Message\*\*\***
>
> 2\) MUST be a valid code. **Error 15004**
>
> 3\) When more than one code is entered within Aggravated Assault/ Murder
> category, there can be NO duplicates. **Error 1006**
>
> 4\) MUST be entered if Louisiana Revised Statute (6) **has a NIBRS
> Offense code \[as defined on Master LIBRS/LRS Code Table\] of:**

-   **13A\
    09A, 09B or 09C**\
    \
    ***[and]{.underline}*** Louisiana Revised Statute (6) is one of the
    following:

> 14:20 14:30 14:30.1 14:31 14:32
>
> 14:32.1/AA 14:34 14:34.1 14:34.5 14:34.6
>
> 14:34.7 14:35.3/M 14:37 14:37.1 14:37.2
>
> 14:37.4 14:37.5 14:38.1 14:39.1 14:39.2
>
> 14:43.5 14:87.1 14:87.2/F 14:87.2/L 14:87.5/F
>
> 14:87.5/L 14:93/F 14:93.2.3 14:94/E 14:107.1/F
>
> 14:108.2 14:108/B1BF 14:122/F 14:129/A2F 14:129.1/F
>
> 14:130.1/F 14:133.1/F 14:404/Q 14:501
>
> ***[\
> and]{.underline}* Offense Connected to Victim Sequence Number (24)
> must relate to one of the above offenses. Error 15019**
>
> 5\) Unknown Circumstances (\"10\") is mutually exclusive with all other
> codes, that is, no other code can be entered. Enter Unknown (\"10\")
> ONLY if no other code applies. **Error 15056\
> **

6\) No more than [one]{.underline} circumstance category (that is,
Aggravated\..., Negligent\..., Justifiable\...) can be entered. **Error
15056\
**

> 7\) **When Assault/Homicide Circumstances (31) is Other Felony Involved
> (\"08\"), then the incident must have [two or more]{.underline}
> Offenses. Error 15080**
>
> **8) Aggravated Assault CANNOT use Mercy Killing (\"07\"), as this
> code does not relate to Aggravated Assault. Error 15062\
> **
>
> **9) WARNING: At MOST, TWO Assault Circumstances (31) are allowed.
> Beginning with LIBRS 2.5 Specifications, the third Assault
> Circumstance is ignored. \*\*\*New Warning Message in LIBRS 2.5\*\*\*\
> **

**Example:** Two rival juvenile street gangs rumble over \"turf\" rights
to sell drugs and one of the gang members is killed. Possible entries
are [Argument]{.underline} (\"01\"), [Drug Dealing]{.underline}
(\"03\"), and [Juvenile Gang]{.underline} (\"05\"). While all three
would apply, there is a *limit of two entries*. Therefore, the two most
descriptive codes (as determined by the reporting agency) should be
used. In this case, the reporting agency entered \"03\" and \"05.\"

**[Aggravated Assault, Murder and Non-Negligent Manslaughter
Circumstances]{.underline}**

> **8) Enter up to [two]{.underline} codes for the Aggravated Assault,
> Murder and Non-Negligent Manslaughter Circumstances when Louisiana
> Revised Statute (6) has a NIBRS Offense code \[as defined on Master
> LIBRS/LRS Code Table\] of [09A]{.underline} or [13A,]{.underline} and
> the Louisiana Revised Statute (6) is one of the following:**
>
> 14:30 14:30.1 14:31 14:32.1/AA 14:34\
> 14:34.1 14:34.5 14:34.6 14:34.7 14:35.3/M
>
> 14:37 14:37.1 14:37.2 14:37.4 14:37.5
>
> 14:38.1 14:39.1 14:39.2 14:43.5 14:87.1
>
> 14:87.2/F 14:87.2/L 14:87.5/F 14:87.5/L 14:93/F
>
> 14:93.2.3 14:94/E 14:107.1/F 14:108/B1BF 14:108.2
>
> 14:122/F 14:129/A2F 14:129.1/F 14:130.1/F 14:133.1/F

14:404/Q **Error 31008**

**\*\*\* Assault on Law Enforcement Officer (Shaded Brown) is a new
Aggravated Assault and Non-Negligent Manslaughter Circumstance,
beginning with LIBRS Spec 2.5. \*\*\***

+-----------------------+-----------------------+-----------------------+
| Aggravated Assault    |                       |                       |
| and Non-Negligent     |                       |                       |
| Manslaughter          |                       |                       |
| Circumstances         |                       |                       |
+=======================+=======================+=======================+
| Code                  | **Description**       | **Valid NIBRS Offense |
|                       |                       | Codes for LIBRS       |
|                       |                       | Validation**          |
+-----------------------+-----------------------+-----------------------+
| 01                    | Argument              | 13A, 09A              |
+-----------------------+-----------------------+-----------------------+
| 02                    | Assault on Law        | 13A, 09A              |
|                       | Enforcement Officer   |                       |
|                       |                       | (MUST be entered if   |
|                       |                       |                       |
|                       |                       | Victim Type = 'L')    |
+-----------------------+-----------------------+-----------------------+
| 03                    | Drug Dealing          | 13A, 09A              |
+-----------------------+-----------------------+-----------------------+
| 04                    | Gangland              | 13A, 09A              |
+-----------------------+-----------------------+-----------------------+
| 05                    | Juvenile Gang         | 13A, 09A              |
+-----------------------+-----------------------+-----------------------+
| 06                    | Domestic Violence     | 13A, 09A              |
+-----------------------+-----------------------+-----------------------+
| 07                    | Mercy Killing (Not    | 09A                   |
|                       | applicable to         |                       |
|                       | Aggravated Assault)   |                       |
+-----------------------+-----------------------+-----------------------+
| 08                    | Other Felony Involved | 13A, 09A              |
+-----------------------+-----------------------+-----------------------+
| 09                    | Other Circumstances   | 13A, 09A              |
+-----------------------+-----------------------+-----------------------+
| 10                    | Unknown Circumstances | 13A, 09A              |
+-----------------------+-----------------------+-----------------------+
| 40                    | Child Abuse (LIBRS    | 13A, 09A              |
|                       | only, reported to     |                       |
|                       | NIBRS as Other        |                       |
|                       | Circumstances         |                       |
|                       | (\"09\"))             |                       |
+-----------------------+-----------------------+-----------------------+

**Allowed Entries for [Aggravated Assault and Non-Negligent Manslaughter
Circumstances]{.underline}:**

**[Negligent Manslaughter Circumstances]{.underline}:**

> **9)** Enter only [one]{.underline} **code for Negligent
> Manslaughter** Circumstances (31) when Louisiana Revised Statue (6)
> **has a NIBRS Offense code \[as defined on Master LIBRS/LRS Code
> Table\] of [09B,]{.underline}** and Louisiana Revised Statute (6) is
> one of the following:
>
> 14:32 14:501
>
> **Error 31009**

**Allowed Entries for [Negligent Manslaughter
Circumstances]{.underline}**

  Negligent Manslaughter Circumstances                                                                                    
  -------------------------------------- -------------------------------------------------------------------------------- ----------------------------------------------------
  Code                                   **Description**                                                                  **Valid NIBRS Offense Codes for LIBRS Validation**
  30                                     Child Playing with Weapon                                                        09B
  31                                     Gun Cleaning Accident                                                            09B
  32                                     Hunting Accident                                                                 09B
  33                                     Other Negligent Weapon Handling                                                  09B
  34                                     Other Negligent Killings                                                         09B
  40                                     **Child Abuse (LIBRS only, reported to NIBRS as Negligent Killings (\"34\"))**   **09B**

> **9a) If Non-Negligent Circumstances (31) is Child Abuse (\"40\"),
> then the Victim that is Connected to this Offense must have an age
> that equals**
>
> **NN NB BB 01-16 01-16, with a trailing "E". Error 22120**

**[Justifiable Homicide Circumstances]{.underline}**

> 10\) Enter only [one]{.underline} **code for Justifiable Homicide
> Circumstances** when Louisiana Revised Statute (6) has a NIBRS Offense
> **code \[as defined on Master LIBRS/LRS Code Table\] of
> [09C]{.underline}, a**nd Louisiana Revised Statute (6) is
> [14:20]{.underline}
>
> **Error 31010**

  Justifiable Homicide Circumstances                                        
  ------------------------------------ ------------------------------------ ----------------------------------------------------
  Code                                 **Description**                      **Valid NIBRS Offense Codes for LIBRS Validation**
  20                                   Criminal Killed by Private Citizen   09C
  21                                   Criminal Killed by Police Officer    09C

**Allowed Entries for [Justifiable Homicide
Circumstances]{.underline}:**

> 11\) When Criminal Killed by Private Citizen (\"20\") or Criminal Killed
> by Police Officer (\"21\") is entered, then Additional Justifiable
> Homicide Circumstances (32) MUST be entered. **Error** **15055**
>
> **12) When Justifiable Homicide (NIBRS Code [09C]{.underline}) is
> reported, no other offense may be reported in the Incident Report.
> Error 12066**

**\
**

Additional Justifiable Homicide Circumstance (32)
-------------------------------------------------

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be a valid code. **Error** **15004**
>
> 2\) When this Data Element (32) is entered, then *Aggravated
> Assault/Homicide Circumstance **(**31**)*** MUST show one of the
> following Justifiable Homicide ([NIBRS 09C]{.underline}) Circumstances:
>
> 20 Criminal Killed by Private Citizen
>
> 21 Criminal Killed by Police Officer
>
> when **Type of Victim (25) is Individual ("I"). Error** **15057**

**Allowed Entries for Justifiable Homicide:**

> Enter only [one]{.underline} code for **Justifiable Homicide (NIBRS
> 09C):**

  Justifiable Homicide Circumstance   
  ----------------------------------- --------------------------------------------------------------------------------
  A                                   Criminal Attacked Police Officer and That Officer Killed Criminal
  B                                   Criminal Attacked Police Officer and Criminal Killed by Another Police Officer
  C                                   Criminal Attacked by Civilian
  D                                   Criminal Attempted Flight from a Crime
  E                                   Criminal Killed in the Commission of a Crime
  F                                   Criminal Resisted Arrest
  G                                   Unable to Determine/Not Enough Information

**Example of Justifiable Homicide:** In resisting arrest, a fugitive
pulled a gun and fired two times in the direction of two police officers
who were attempting to take him into custody. Neither officer was hit,
but both drew their weapons and returned fire, killing the fugitive. As
this was a Justifiable Homicide (NIBRS 09C), Criminal Killed by Police
Officer (\"21\") should be entered into *Data Element 31*.

Assuming the facts above, the possible entries for *Data Element 32*
are:

A Criminal Attacked Police Officer and That Officer Killed Criminal\
B Criminal Attacked Police Officer and Criminal Killed by Another Police
Officer\
F Criminal Resisted Arrest

As [only one code]{.underline} can be entered into this Data Element
(32), the most descriptive code (as determined by the reporting agency)
should be used. In this case, the reporting agency entered *Criminal
Attached Police Officer and That Officer Killed Criminal (\"A\")*.

**\
**

### Type of Injury (33)

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be a valid code. **Error** **15004**
>
> 2\) If more than one code entered, CANNOT be a duplicate. **Error**
> **15006**
>
> 3\) None (\"N\") is mutually exclusive with any other value entered. That
> is, None \"N\" is to be used only if no other code applies. **Error**
> **15007**
>
> 4\) MUST be entered if Louisiana Revised Statute (6) is a *Crime Against
> Person* and has **a NIBRS Offense code \[as defined on Master LIBRS/LRS
> Code Table\] of:**
>
> **100**
>
> **11A 11B 11C 11D**
>
> **120**
>
> **13A 13B**
>
> **210**
>
> **90Z**
>
> ***[and]{.underline}*** the Louisiana Revised Statute is one of the
> following:
>
> **4:28.1 14:32.12 14:34 14:34.1 14:34.2**
>
> **14:34.3 14:34.4 14:34.5 14:34.5.1 14:34.6**
>
> **14:34.7 14:35 14:35.1 14:35.2 14:35.3**
>
> **14:35.3/M 14:37 14:37.1 14:37.2 14:37.4**
>
> **14:37.5 14:38 14:38.1 14:38.2 14:38.3**
>
> **14:39 14:39.1 14:39.2 14:42/A 14:42/V**
>
> **14:42.1/A 14:42.1/V 14:43/A 14:43/V 14:43.1/N**
>
> **14:43.1/P 14:43.2/N 14:43.2/P 14:43.3 14:43.4**
>
> **14:43.5 14:43.6 14:44 14:44.1 14:44.1/A**
>
> **14:44.1/N 14:44.1/O 14:44.1/P 14:44.1/V 14:44.2**
>
> **14:45 14:45.1 14:46 14:46.1 14:46.30**
>
> **14:47 14:50.1 14:50.2 14:79 14:81**
>
> **14:81.2 14:81.3 14:81.4 14:87.2/F 14:87.5/F**
>
> **14:89.1 14:92.1 14:93/F 14:93.2.3 14:93.3**
>
> **14:93.5 14:94/E 14:102.21 14:103/A1 14:107.1/F**
>
> **14:108/B1BF 14:108/B1B 14:108.2 14:122/F 14:129/A2F**
>
> **14:129.1 14:129.1/F 14:130.1/A 14:130.1/F 14:133.1/F**
>
> **14:133.5 14:286 14:404/J 14:404/Q 32:668**
>
> ***[and]{.underline}* Offense Connected to Victim Sequence Number (24)
> MUST relate to one of the above offenses. Error** **15019**
>
> **5) When** **Offense Connected to Victim Sequence Number (24) relates
> to the Offense of Simple Assault (NIBRS \"13B\"[)]{.underline}, there
> CANNOT be *major* injury codes which would indicate an Aggravated
> Assault. Permissible codes are Apparent Minor Injury (\"M\") and None
> (\"N\"[)]{.underline}. Error 15079**
>
> **6)** **When the Offense Connected to Victim Sequence Number (24)
> relates to the Offense** **of** **Aggravated** **Assault (NIBRS
> \"13A\"[)]{.underline}, then Type of the Injury** **cannot be 'M' or
> 'N' with the Type** **of Weapon/Force** **Involved** **=**
> **'Personal** **Weapon** **(40)'.**
>
> **Error: *90029***

**Allowed Entries:\
**Enter only [one]{.underline} code for each Victim Injury Segment;
however, can submit as many Victim Injury Segments (51) as applicable:

  Type of Injury   
  ---------------- ---------------------------------------
  N                None
  B                Apparent Broken Bones (includes Nose)
  I                Possible Internal Injury
  L                Severe Laceration
  M                Apparent Minor Injury
  O                Other Major Injury
  T                Loss of Teeth
  U                Unconsciousness

### Offender Number to be Related (34)

Data Characteristics: 3 Character Numeric

Requirements:

> 1\) MUST be entered if Louisiana Revised Statute (6) is a *Crime Against
> Person*, and has a NIBRS Offense code \[as defined on Master LIBRS/LRS
> Code Table\] of:\
> \
> 09A 09B 09C\
> 100\
> 11A 11B 11C 1D\
> 120\
> 13A 13B 13C\
> 36A 36B\
> 90Z\
> \
> ***[and]{.underline}*** has a Louisiana Revised Statute (6) that is one
> of the following:
>
> **4:28.1 14:32.12 14:34 14:34.1 14:34.2**
>
> **14:34.3 14:34.4 14:34.5 14:34.5.1 14:34.6**
>
> **14:34.7 14:35 14:35.1 14:35.2 14:35.3**
>
> **14:35.3/M 14:37 14:37.1 14:37.2 14:37.4**
>
> **14:37.5 14:38 14:38.1 14:38.2 14:38.3**
>
> **14:39 14:39.1 14:39.2 14:42/A 14:42/V**
>
> **14:42.1/A 14:42.1/V 14:43/A 14:43/V 14:43.1/N**
>
> **14:43.1/P 14:43.2/N 14:43.2/P 14:43.3 14:43.4**
>
> **14:43.5 14:43.6 14:44 14:44.1 14:44.1/A**
>
> **14:44.1/N 14:44.1/O 14:44.1/P 14:44.1/V 14:44.2**
>
> **14:45 14:45.1 14:46 14:46.1 14:46.30**
>
> **14:47 14:50.1 14:50.2 14:79 14:81**
>
> **14:81.2 14:81.3 14:81.4 14:87.2/F 14:87.5/F**
>
> **14:89.1 14:92.1 14:93/F 14:93.2.3 14:93.3**
>
> **14:93.5 14:94/E 14:102.21 14:103/A1 14:107.1/F**
>
> **14:108/B1BF 14:108/B1B 14:108.2 14:122/F 14:129/A2F**
>
> **14:129.1 14:129.1/F 14:130.1/A 14:130.1/F 14:133.1/F**
>
> **14:133.5 14:286 14:404/J 14:404/Q 32:668**
>
> ***[and]{.underline}* Offense Connected to Victim Sequence Number (24)
> MUST relate to one of the above offenses. Error 15059**
>
> 2\) MUST be numeric entry with zero left-fill, if entered. **Error**
> **15002**
>
> 3\) Type of Victim (25) MUST be Individual (\"I\") **or Law Enforcement
> Officer (\"L\"[)]{.underline}** for data to be entered. **Error**
> **15058**
>
> 4\) If more than one number entered, then this Data Element (34) CANNOT
> be a duplicate. **Error** **15006**
>
> 5\) \"000\" may only be entered when there is only one Offender Segment
> (40) submitted and nothing was known about identity and number of
> offender(s). **Error** **15068\
> **

6\) A corresponding Offender Segment (40) must be present. **Error**
**10070\
**

> **7) When a Victim is connected to a *Crime Against Person* or Robbery
> Offense, all Offender Sequence Numbers (36), MUST also be entered in
> Offender Number to be Related (34). If the Victim is related to the
> Offender in more than one way, use the closest relationship. Error
> 10085**
>
> **8) If Offenders of Human Trafficking offenses (NIBRS Codes 64A, 64B
> and 40C) are *known*, then data value for Offender Number to be
> Related (Data Element 34) MUST be supplied as well.**
>
> 9\) **If Offenders of Human Trafficking offenses (NIBRS Codes 64A, 64B
> and 40C) are *unknown*, then data value for Offender Number to be
> Related (Data Element 34) MUST be "000" (UNKNOWN)**.**\
> **

**Example:** If Victim 001\'s relationship to Offender 004 is to be
reported, enter \"004\".

### Relationship of Victim to Offender (35)

**Data Characteristics:** 2 Character Alpha

**Requirements:**

> 1\) Every Offender indicated in Offender Number to be Related (34)
> requires an entry in Relationship of Victim to Offender (35), except
> when the Offender Sequence Number (36) is Unknown (\"000\"). This field
> MUST be Blank (G) in instances where \"000\" is entered. **Error 15060**
>
> 2\) MUST be a valid code. **Error** **15004**
>
> 3\) Husbands and wives (that is, spouses) must be at least 10 years of
> age.\
> **Error** **15050, 14050**
>
> 4\) The Sex of Victim (27) and Sex of Offender (38) MUST reflect the
> implied relationship. The following relationships must reflect a
> specific sex for the Victim, Offender or both depending upon the
> relationship: **Error** **14053**

  Implied Relationships of Victims to Offenders                                        
  ----------------------------------------------- ------------------------------------ -----------------------------
  Code                                            **Relationship**                     **Victim/Offender Genders**
  XS                                              Victim was Ex-Spouse                 Different
  SE                                              Victim was Spouse                    Different
  CS                                              Victim was Common-Law Spouse         Different
  ES                                              Victim was Estranged Spouse          Different
  HR                                              Homosexual                           Same
  VO                                              Victim was Offender                  Same
  BG                                              Victim was Boyfriend/Girlfriend      Different
  XB                                              Victim was Ex-Boyfriend/Girlfriend   Different
  NM                                              Non-Married Live-In                  Different

> **Error 14053**
>
> 5\) The Age of Victim and Age of Offender MUST reflect the implied
> relationship.
>
> **Error** **14054**

  Implied Age Difference Between Victims and Offenders                                     
  ------------------------------------------------------ --------------------------------- -----------------------
  Code                                                   **Relationship**                  **Victim MUST Be**
  CH                                                     Victim was Child                  Younger
  PA                                                     Victim was Parent                 Older
  GP                                                     Victim was Grandparent            Older
  GC                                                     Victim was Grandchild             Younger
  VO                                                     Victim was Offender               Same Age
  BE                                                     Victim was Babysitee (the Baby)   Younger
  SE                                                     Victim was Spouse                 At Least 10 years old
  ES                                                     Victim was Estranged Spouse       At Least 10 years old
  CS                                                     Victim was Common-Law Spouse      At Least 10 years old
  XS                                                     Victim was Ex-Spouse              At Least 10 years old
  NM                                                     Victim was Non-Married Live-In    At Least 10 years old

> 6\) Relationship CANNOT be entered when Offender Number to be Related
> (34) is Unknown (\"000\"). **Error** **15068**
>
> 7\) When Victim was Offender [(]{.underline}\"VO\"[)]{.underline} is
> entered, a minimum of [two]{.underline} Victims Segments (50) and
> [two]{.underline} Offender Segments (40) MUST be submitted. \"VO\"
> indicates situations such as brawls and domestic disputes **where all of
> the participants in the incident were Victims and Offenders of the same
> Offense (for example, assaults or double murders where two people kill
> each other).** In most cases, each Victim is also the Offender;
> therefore, every Victim Segment (50) will contain a \"VO\" code.\
> \
> However, there may be some situations where only one of the Victims is
> also the Offender, but where the other Victim(s) are not also the
> Offender(s) (for example, a Victim who is not an Offender could be an
> innocent bystander in a barroom brawl, or a child who is victimized as a
> result of the parents domestic dispute). **Error** **15070**
>
> 8\) When entered, Victim was Offender (\"VO\") can only be entered once
> in a Victim Segment (50) and can refer to an Offender only once. Since
> \"VO\" points to himself/herself, a Victim CANNOT at the same time be
> two Offenders.
>
> **Error** **15071, 15074**
>
> 9\) When the related Offender has \"Unknown\" values entered for Age, Sex
> and Race, the relationship must be Relationship Unknown (\"RU\"). This
> edit ensures a logical relationship. For example, if Brother ("SB") was
> entered fro Relationship of Victim to Offender (25), then Age, Sex and
> Race would NOT be Unknown values.
>
> **Error** **15072**
>
> **10) In a multiple Offender incident, a Victim CANNOT have a
> relationship of Spouse (\"SE\") to more than one Offender. Error
> 15075**
>
> **11) In a multiple Victim incident, two or more Victims CANNOT have a
> Victim relationship of Spouse (\"SE\") to the same Offender. Error
> 15076**
>
> 12\) MUST be entered if Louisiana Revised Statute (6) is a *Crime Against
> Person*, and has a **NIBRS Offense code \[as defined on Master LIBRS/LRS
> Code Table\] of:\
> \
> 09A 09B 09C\
> 100\
> 11A 11B 11C 11D\
> 120\
> 13A 13B 13C\
> 36A 36B\
> 90Z\
> \
> *[and]{.underline}*** Louisiana Revised Statute (6) is one of the
> following:
>
> 14:28.1 14:30 14:30.1 14:31\
> 14:32 14:32.1/AA 14:32.12 14:34 14:34.1\
> 14:34.2 14:34.3 14:34.4 14:34.5 14:34.5.1
>
> 14:34.6 14:34.7 14:35 14:35.1 14:35.2
>
> 14:35.3 14:35.3/M 14:37 14:37.1 14:37.2
>
> 14:37.3 14:37.4 14:37.5 14:38 14:38.1
>
> 14:38.2 14:38.3 14:39 14:39.1 14:39.2
>
> 14:40 14:40.1 14:40.2 14:40.3 14:40.4
>
> 14:40.5 14:40.6 14:40.60 14:42/A 14:42/V
>
> 14:42.1/A 14:42.1/V 14:43/A 14:43/V 14:43.1/N
>
> 14:43.1/P 14:43.2/N 14:43.2/P 14:43.3 14:43.4
>
> 14:43.5 14:43.6 14:44 14:44.1 14:44.1/A
>
> 14:44.1/N 14:44.1/O 14:44.1/P 14:44.1/V 14:44.2
>
> 14:45 14:45.1 14:46 14:46.1 14:46.30
>
> 14:47 14:50.1 14:50.2 14:54.1 14:54.6
>
> 14:78 14:78.1 14:79 14:80 14:80.1
>
> 14:81 14:81.2 14:81.3 14:81.4 14:87.1
>
> 14:87.2/F 14:87.2/L 14:87.5/F 14:87.5/L 14:89.1
>
> 14:92.1 14:92.3 14:93/F 14:93.2.3 14:93.3
>
> 14:93.5 14:94/E 14:102.21 14:103/A1 14:107.1/F
>
> 14:108/B1BF 14:108/B1B 14:108.2 14:122/F 14:122/T
>
> 14:122.1 14:122.2 14:129/A1 14:129/A2F 14:129/A2T
>
> 14:129.1 14:129.1/F 14:129.1/T 14:130.1/A 14:130.1/T
>
> 14:130.1/F 14:133.1/F 14:133.1/T 14:133.5 14:285
>
> 14:286 14:404/J 14:404/Q 14:501 32:668
>
> **Relationship of Victim to Offender (35) MUST be Blank (G) when
> \"000\" is entered into Offender Number to be Related (34). Error**
> **15059**
>
> **13) If Offenders of Human Trafficking offenses (NIBRS Codes 64A, 64B
> and 40C) are *known*, then data value for Relationship of Victim to
> Offender (Data Element 34) MUST be supplied as well.**

**Allowed Entries:** MUST enter [ONE]{.underline} code for each Victim
Segment (50). MUST enter relationship of each Victim to each Offender
when Offense is a *Crime Against Person* or a Robbery against a Victim:

  Relationship of Victim to Offender    
  ------------------------------------- ---------------------------------------------------------------------------------
  Within Family                         
  SE                                    Victim was Spouse
  CS                                    Victim was Common-Law Spouse
  PA                                    Victim was Parent
  SB                                    Victim was Sibling (brother or sister)
  CH                                    Victim was Child
  GP                                    Victim was Grandparent
  GC                                    Victim was Grandchild
  IL                                    Victim was In-Law
  SP                                    Victim was Stepparent
  SC                                    Victim was Stepchild
  SS                                    Victim was Step sibling (stepbrother or stepsister)
  OF                                    Victim was Other Family Member (step-grandparents, ex-common law spouses. etc.)
  NM                                    Victim was Non-Married Live-In (to NIBRS as CS)
  Outside Family, But Known to Victim   
  AQ                                    Victim was Acquaintance
  FR                                    Victim was Friend
  NE                                    Victim was Neighbor
  BE                                    Victim was Babysittee (the baby)
  BG                                    Victim was Boyfriend/Girlfriend
  XB                                    **Victim was Ex-Boyfriend/Ex-Girlfriend** (to NIBRS as BG)
  CF                                    Victim was Child of Boyfriend or Girlfriend
  HR                                    Victim was in Homosexual Relationship
  XS                                    Victim was Ex-Spouse
  EE                                    Victim was Employee
  ER                                    Victim was Employer
  OK                                    Victim was Otherwise Known
  ES                                    Victim was Estranged Spouse (to NIBRS as SE)
  Not Know By Victim                    
  RU                                    Relationship Unknown
  ST                                    Victim was Stranger
  Other                                 
  VO                                    Victim was Offender

**Examples**:

\(1) An employee assaulted his employer (a person) with his fists. Victim
was Employer (ER) should be entered.

\(2) Two unknown subjects rob a male and a female couple. Victim was
Stranger (\"ST\") should be entered to indicate the relationship of each
Victim to each Offender.

### 

### Offender Sequence Number (36)

**Data Characteristics:** 3 Character Numeric

**Requirements:**

> 1\) MUST be present \-- CANNOT be blank. **Error** 14001
>
> 2\) MUST be numeric entry with zero left-fill. Offender Sequence Number
> (36) distinguishes one Offender from another and identifies a situation
> where nothing was known about the number of Offenders, or who they were.
> For example, a corpse was found in a ditch and there were no
> eyewitnesses or other information that could provide data about possible
> Offenders. In this case, Unknown (\"000\") would be entered. However, if
> five Offenders were seen running from the scene, then five Offender
> records would be submitted, each with a difference Offender Sequence
> Number (36). **Error** **14002**
>
> 3\) If an incident is Exceptionally Cleared (4), then Unknown (\"000\")
> CANNOT be entered. Unknown (\"000\") indicates that nothing is known
> about the Offender(s) regarding number and any identifying information.
> One of the criteria for Exceptionally Clearing (4) an incident is that
> at least one of the Offenders be known. **Error** **14057**
>
> 4\) For a Justifiable Homicide (NIBRS 09C), at least one of the Offenders
> must have \"known\" information for Age, Sex, and Race. Consequently,
> Unknown (\"000\") is not valid as an Offender Sequence Number (36).
> **Error** **14059**
>
> 5\) If the number is Unknown (\"000\"[)]{.underline}, no other Offender
> Segments (40) can be submitted.\
> **Error** **14055**
>
> 6\) MUST be UNIQUE - CANNOT be duplicated. **Error** **14051**
>
> 7\) When Offender Sequence Number (36) is Unknown (\"000\"), Offender
> Suspected of Using/Gaming Motivation (8) must be Not Applicable (\"N")
> and Bias Motivation/Bias Crime Type (8A) must be None (\"88\").
> **Error** **81400**

**Examples:**

\(1) A corpse with five bullet holes in it was found in an abandoned
warehouse. There were no witnesses to the crime, or suspects. A single
Offender Segment (40) should be submitted with \"000\" entered into
Offender Sequence Number (36) and with no entries in Data Elements 37
through 39. **Also, Offender Suspected of Using (8) must be Not
Applicable (\"N\") and Bias Motivation/Bias Crime Type (8A) must be None
\"88\".**

\(2) Two Offenders were seen fleeing the scene of a burglary, but because
they were wearing ski masks, their Age, Sex, and Race could not be
determined. Two Offender Segments (40) should be submitted: the first
with Offender Sequence Number \"001\" and the second with \"002\".
Applicable Unknown codes should be entered into Data Elements 37, 38,
and 39. **Also, Offender Suspected of Using (8) MUST be Not Applicable
(\"N\")and Bias Motivation/Bias Crime Type (8A) MUST be None (\"88\").**

**\
**

### \[Age of Offender (37)

### (at Time of Incident)

**Data Characteristics:** 3 Character Alpha

**Requirements:**

> 1\) MUST be present when Offender Sequence Number (36) is other than
> Unknown (\"000\"). **Error** **14001**
>
> 2\) CANNOT be entered when Offender Sequence Number (36) is Unknown
> (\"000\").\
> **Error** **14052**
>
> 3\) When an incident is Cleared Exceptionally (4), at least one of the
> Offenders MUST have *known* values in Age, Sex, and Race. **Error**
> **14058**

4\) For a Justifiable Homicide (NIBRS 09C) at least one of the Offenders
MUST have *known* information for Age, Sex, and Race. **Error**
**14059**

> 5\) If Relationship of Victim to Offender (35) contains a relationship of
> Spouse (**\"SE\"**), then the Offender CANNOT be less than 10 years old.
> **Error** **14050**
>
> 6\) [Exact Age:]{.underline}\
> A MUST contain numeric entry of 00 -99. **Error** **14056**
>
> B A single, two-character Age MUST be in first two positions of the
> field. The third position must be Blank (G). **Error** **14008**
>
> 7\) [Estimated Age:]{.underline}\
> A MUST be 2 numeric digits, and have a trailing \"E\". **Error**
> **14009**
>
> B Age CANNOT be an estimate if Date of Birth of Offender (L37) is
> entered, and Incident Date/Hour (3) is an actual Incident Date (that
> is, not a Report Date (\"R\")). **Error** **24010**
>
> C Estimated Age CANNOT be Unknown (\"00\") **and have a trailing
> \"E\".\
> Error** **14022**

**Allowed Entries:** Enter only one code **per Offender Segment(40):**

  Age of Offender (at Time of Incident)   
  --------------------------------------- --------------------------------------------------
  01 to 98                                Years Old (age in years)
  99                                      Over 98 Years Old
  00                                      Unknown (CANNOT have \"E\" with this data value)

> If the Offender\'s Age is NOT KNOWN, estimate the Offender\'s Age and
> append an \"E\" (Estimated). If a range is given for the Offender\'s
> Age, enter the median (average) age of the range (rounded down). If it
> is impossible to determine even an Estimated Age of the Offender, then
> enter Unknown (\"00\").

**Example:** If the Victim, or a witness, reported the Offender\'s Age
as between 25 and 30 years old, enter \"27E\" (the average of 25 and 30
is 27.5, round down to get an estimated age of 27).

### Date of Birth of Offender (L37)

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

**Requirements:**

> 1\) Each component of the date must be valid; that is, months must be
> 01-12, days must be 01-31, and year must include the century (i.e.,
> 19xx, 20xx). In addition, days CANNOT exceed maximum for the month (for
> example, June CANNOT have 31 days). The data CANNOT be greater than that
> entered within the \"Month of Data Submission\" and \"Year of Data
> Submission\" fields on the data record. For example, if \"Month of Data
> Submission\" and \"Year of Data Submission\" are \"06/2014,\" the Date
> of Birth CANNOT contain any date 07/01/2014 or greater. **Error**
> **24030\
> **
>
> 2\) Date of Birth of Offender (L37) MUST be before Incident Date/Hour
> (3). **Error** **24031\
> **
>
> 3\) If entered, and Incident Date/Hour (3) contains the actual Incident
> Date, then Age of Offender (at Time of Incident) (37) must be an *exact
> age*. **Error** **24010**

Sex of Offender (38)
--------------------

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be present when Offender Sequence Number (36) is other than
> Unknown (\"000\"). **Error** **14001**
>
> 2\) MUST be a valid code. **Error** **14004**
>
> 3\) CANNOT be entered when Offender Sequence Number (36) is Unknown
> (\"000\").\
> **Error** **14052**
>
> 4\) When an incident is Cleared Exceptionally (4), at least one of the
> Offenders MUST have *known* values in Age, Sex and Race. **Error**
> **14058**
>
> 5\) For a Justifiable Homicide (NIBRS 09C) at least one of the Offenders
> MUST have *known* information for Age, Sex and Race. **Error** **14059**

**6) For Forcible Rape (NIBRS 11A) or Statutory Rape (NIBRS36B), one or
more of the Offenders MUST have a different sex than the rape Victim.
Error 14060**

**Allowed Entries:** Enter only [one]{.underline} code **per Offender
Segment (40):**

  Sex of Offender   
  ----------------- -------------
  M                 **Male**
  F                 **Female**
  U                 **Unknown**

**Example:** The witness caught only a fleeting glance of the Offender
and, therefore, was unable to report the Offender\'s Sex. The entry
should be Unknown (\"U\").

### Race of Offender (39)

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be present when Offender Sequence Number (36) is other than
> Unknown (\"000\"). **Error** **14001**
>
> 2\) MUST be a valid code. **Error** **14004**
>
> 3\) CANNOT be entered when Offender Sequence Number (36) is Unknown
> (\"000\"). **Error** **14052**
>
> 4\) When an incident is Cleared Exceptionally (4), at least one of the
> Offenders MUST have *known* values in Age, Sex and Race. **Error**
> **14058**
>
> 5\) For a Justifiable Homicide (NIBRS 09C) at least one of the Offenders
> MUST have *known* information for Age, Sex and Race. **Error** **14059**

**Allowed Entries:** Enter only [one]{.underline} code per Offender
Segment (40):

  Race of Offender   
  ------------------ --------------------------------
  W                  White
  B                  Black
  I                  American Indian/Alaskan Native
  A                  Asian/Pacific Islander
  U                  Unknown

Arrestee Sequence Number (40)
-----------------------------

**Data Characteristics:** 3 Character Numeric

**Requirements:**

> 1\) MUST be present\--CANNOT be Blank (G). **Error** **16001**
>
> 2\) MUST be numeric entry of 001 to 999 with Zero left-fill. **Error**
> **16002**
>
> 3\) MUST be unique \-- CANNOT be duplicated. **Error** **26001**
>
> **4) Number of Arrestees (40) CANNOT be greater than number of
> Offenders. Error 16056**

**Example:** If two persons were arrested in connection with a
previously submitted incident, [two]{.underline} Arrestee Segments
should be submitted: one with Arrestee Sequence Number \"001\" and the
other with \"002\".

### Arrestee Name (L40)

**Data Characteristics:** 20 Character Alpha

**Format:** (Last Name)(Suffix,(First Name)(Middle Name)\
Suffix includes standard suffixes used to distinguish between
generations (for example, Sr, Jr, III, II). [Do not include
titles]{.underline} (for example, MD, M.E., Ph.D., Esq., etc.)

**Requirements:** None

Arrest Number/
--------------

Local Booking Number for Arrest (41)
------------------------------------

**Data Characteristics:** 12 Character Alpha

**Requirements:**

> 1\) MUST be present\--CANNOT be Blank (G). **Error** **16001**
>
> 2\) MUST be left-justified with blank right-fill *if* under 12 characters
> in length. **Error** **16016**
>
> 3\) Valid character combinations can include A-Z, 0-9, and hyphens. For
> example, 89-123-SC is valid, but 89+123\*SC or 89-123 SC is invalid.
> **Error** **16017**
>
> 4\) MUST be blank right-fill *if* under 12 characters in length. CANNOT
> have embedded Blanks (G) between the first and last character entered.
> **Error** **16015**
>
> 5\) If more than one code entered, CANNOT BE A DUPLICATE. **Error 16006**

### Arrest Date (42)

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

**Requirements:**

> 1\) MUST be present\--CANNOT be Blank (G). **Error** **16001**
>
> 2\) Each component of Arrest Date (42) MUST be valid; that is, months
> must be 01-12, days must be 01-31, and year must include the century
> (that is, 19xx, 20xx). In addition, days CANNOT exceed maximum for the
> month (for example, June CANNOT have 31 days). Arrest Date (42) CANNOT
> exceed the current date. Arrest Date CANNOT be greater than that entered
> with the \"Month of Data Submission\" and \"Year of Data Submission\"
> fields on the data record. For example, if \"Month of Data Submission\"
> and \"Year of Data Submission\" are \"06/2014\", the Arrest Date (42)
> CANNOT contain any date 07/01/2014 or greater. **Error** **16005**
>
> 3\) CANNOT be earlier than Incident Date/Hour (3). **Error** **16065**
>
> 4\) Arrestee Segments (60) submitted as Time-Window Submission (Action
> Type of Time Window ("W")) CANNOT have Arrest Date (42)
> [earlier]{.underline} than the Agency's Base Date. This also applies to
> any subsequent Modify Submission (\"M") of a previously submitted
> Time-Window Submission (\"W\"). **Error** **16020**

Type of Arrest (43)
-------------------

**Data Characteristics**: 1 Character Alpha

**Requirements:**

> 1\) MUST be present\--CANNOT be Blank (G). **Error** **16001\
> **
>
> 2\) MUST be a valid code. **Error** **16004**

**Allowed Entries:** Enter only [one]{.underline} code per Arrest
Segment:

  Type of Arrest   
  ---------------- ------------------------------------------------------------------------------------
  O                On-View Arrest (taken into custody without a warrant or previous incident report.)
  S                Summoned/Cited (not taken into custody)
  T                Taken into Custody (based on warrant and/or previously submitted incident report)

Multiple Arrestee Segment Indicator (44)
----------------------------------------

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be present\--CANNOT be Blank (G). **Error** 16001)

2\) MUST be a valid code. **Error** 16004)

**Allowed Entries:** Enter only [one]{.underline} code per Arrestee
Segment:

  Multiple Arrestee Segment Indicator   
  ------------------------------------- ----------------
  M                                     Multiple
  C                                     Count Arrestee
  N                                     Not Applicable

**EXAMPLES:**

**(1) After a suspect\'s apprehension for robbery, it was learned that
he was also responsible for five additional robberies within the
jurisdiction. One Arrestee Segment (60) was keyed into the local
computer, along with the Incident Numbers of the six incidents. The
local computer then generated six Arrestee Segments (60) which were
duplicates except for their Incident Numbers. [Five]{.underline} of the
Arrestee Segments (60) had Multiple ("M") and [one]{.underline} had
Count Arrestee ("C") entered into Multiple Arrestee Segment Indicator
(44). Each of the six robberies is cleared.**

**(2) If the suspect\'s arrest did not clear additional incidents, the
entry should be Not Applicable ("N").**

Louisiana Revised Statute Number of Arrest (45)
--------------------------

**Data Characteristics**: 12 Character Alpha

**Format**: TT:SSSS.S/P-**I**

+-----------------------------------+-----------------------------------+
| Louisiana Revised Statute Format  |                                   |
+===================================+===================================+
| TT                                | Title                             |
+-----------------------------------+-----------------------------------+
| SSSS.S                            | Section                           |
+-----------------------------------+-----------------------------------+
| **PPP/I**                         | **Subpart, *[or]{.underline}***   |
|                                   |                                   |
|                                   | **Subpart with Qualifier,         |
|                                   | *[or]{.underline}***              |
|                                   |                                   |
|                                   | **Qualifier, *[or]{.underline}*** |
|                                   |                                   |
|                                   | **Juvenile Qualifier, and**       |
|                                   |                                   |
|                                   | **an Inchoate Modifier, if        |
|                                   | applicable, would be indicated by |
|                                   | a dash with a data value behind   |
|                                   | the LRS Code that defines the     |
|                                   | offense.**                        |
+-----------------------------------+-----------------------------------+

**Requirements:**

> 1\) MUST be present\--CANNOT be Blank (G). **Error** 16001
>
> 2\) MUST be a valid code on Master LIBRS/LRS Code Table. This code does
> not have to match one of the code(s) entered for Louisiana Revised
> Statute (6) within Offense Segments (6) submitted in an Incident Report.
> **Error** **16004**
>
> 3\) The Louisiana Revised Statute (6) CANNOT be Justifiable Homicide
> (14:20), because this Offense does not result in a subsequent arrest of
> the Offender. **Error** **16070**
>
> **4) An incident CANNOT have arrests when Louisiana Revised Statute
> (6) is Justifiable Homicide (LRS 14:20, or NIBRS 09C). A Justifiable
> Homicide [never involves an arrest of the Offende]{.underline}r (the
> person who committed the Justifiable Homicide).\
> Error 16069\
> **

**\
**

Agency Supplied NIBRS Code For Arrest (N45)
----------------

**\*\*\* New Data Element \*\*\***

**Data Characteristics:** 3 Character AlphaNumeric

**Requirements:**

1)  If the value of LIBRS Spec Indicator (C12) is "2.5", then EVERY
    Offense Segment (20) in the data submission MUST have an Agency
    Supplied NIBRS Code (N6). **If Agency Supplied NIBRS Code (N6) is
    missing, WinLIBRS will insert the *default* NIBRS value based on the
    LRS for that particular offense**. **\
    Warning 45001 \*\*\*New Warning Message\*\*\*\
    **

2)  MUST be a valid code.\
    **Error 45002 \*\*\*New Error Message\*\*\***

    **\
    **

**\
**

### Arrest Connection to Offense (L45)

**Data Characteristics:** 15 Character Alpha

**Requirements:** MUST be a valid Offense Sequence Number (L6). The
Offense Segment (20) referred to by this Data Element (L45) MUST exist.

**\
**

Arrestee was Armed With (At Time of Arrest) (46)
--------------------------

**Data Characteristics:** 3 Character Alpha

**Requirements:**

> 1\) MUST be present\--CANNOT be blank. **Error** **16001**
>
> 2\) MUST be a valid code. **Error** **16004**
>
> 3\) If [more than one]{.underline} code entered, CANNOT be a DUPLICATE.
> **Error** **16006**
>
> 4\) Unarmed (\"01\") is mutually exclusive with any other value. That is,
> it is to be used ONLY when no other code applies. **Error** **16007**
>
> 5\) The third character must be either Blank (G) or Automatic (\"A\").
> **Error** **16054**
>
> 6\) If the firearm is Automatic, add Automatic (\"A\") as the third
> character of code; valid only with the following codes:

  Automatic Firearms   
  -------------------- ---------------------------
  11                   Firearm (Type Not Stated)
  12                   Handgun
  13                   Rifle
  14                   Shotgun
  15                   Other Firearm

> **Error** **16055**

**Allowed Entries:** Enter as many codes as apply. However, DO NOT enter
the same code more than once for the same Arrestee:

  Arrestee was Armed with (at Time of Arrest)   
  --------------------------------------------- ------------------------------------------------------------------------------------------
  01                                            Unarmed **(If toy or play weapon, or not commonly known weapon)**
  11                                            Firearm (Type Not Stated)
  12                                            Handgun
  13                                            Rifle
  14                                            Shotgun
  15                                            Other Firearm
  16                                            Lethal Cutting Instrument (for example, switchblade knife, martial arts \"stars\", etc.)
  17                                            Club/Blackjack/Brass Knuckles

**Example:\
(**1) When a man was arrested, he had in his possession a .357-Magnum
handgun and a penknife. The entry should be Handgun ("12\"). Because a
small pocket knife is not generally considered to be a "weapon," it does
not qualify for reporting to LIBRS.

\(2) A female resisted arrest using a liquor bottle and a chair as a
weapon before being subdued. The entry for LIBRS should be Unarmed
("01\"). Although the subject used items as weapons, they were not
commonly known weapons.

Age of Arrestee [At Time of Arrest] (47)
--------------------------

**Data Characteristics:** 3 Character Alpha

**Requirements:**

> 1\) MUST be present\--CANNOT be blank. (**Error** 16001)
>
> 2\) If age is under 17, then Data Element \# 52 (disposition of Arrestee
> Under 17) must be entered. (**Error** 16052)
>
> 3\) EXACT AGE:
>
> A MUST contain numeric entry of 00 -99. **Error** **16064**
>
> B A single, two-character Age MUST be in first two positions of the
> field. The third position must be Blank (G). **Error** **16008\
> **
>
> C When Age is unknown, don\'t confuse Over 98 Years Old (\"99\") with
> Unknown (\"00\"). Whenever Over 98 Years Old (\"99\") is entered, a
> warning message is produced. **WARNING 16041**
>
> 4\) ESTIMATED AGE:
>
> A MUST be 2 numeric digits, and have a trailing \"E\". **Error**
> **16009\
> **
>
> B A**ge CANNOT be an estimate if Date of Birth of Arrestee (47) is
> reported. Error** **26010**
>
> C The estimated Age CANNOT be Unknown (\"00\") **and have a trailing
> \"E\". Error** **16022**

  Juvenile Qualifiers   
  --------------------- ---------------------------
  JU:RUN                **Runaway Offense (90I)**
  JU:UNG                **Ungovernable (90C)**
  JU:CUR                **Curfew (90B)**
  JU:TRU                **Truancy (90Z).**

> **5) When Juvenile Qualifiers are used, Age of Arrestee (47) must be
> "01\" thru "16\" for the following Juvenile Qualifiers:\
> \
> **
>
> **\
> **
>
> **Error 22100**

**Allowed Entries:** Enter only [one]{.underline} code per Arrest
Segment (60):

  Age of Arrestee   
  ----------------- ------------------------------------------------------
  01 to 98          Years Old (Age in Years)
  99                Over 98 Years Old
  00                Unknown **(CANNOT have \"E\" with this data value)**

> When Arrestee\'s Age is not known, estimate the Arrestee\'s Age and
> append an \"E\" (Estimated).

**Example:** An Arrestee refused to give his Date of Birth, but he
appeared to be 35 to 40 years old. Possible entries would be Unknown
(\"00\") or and estimated 37 years old (\"37E\"). Use the latter when
possible.

Date of Birth of Arrestee (L47)
-------------------------------

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

**Requirements:**

> **1) Age CANNOT BE ESTIMATED when Date of Birth is Known. If the age
> is reported as Estimated (with trailing \"E\") in Age of Arrestee at
> the Time of Arrest (47), and the agency also reports Date of Birth of
> Arrestee (L47) this incident will be rejected. When Date of Birth is
> known, Age CANNOT be estimated. Error 26010\
> **
>
> **2) AGE CANNOT BE UNKNOWN if Date of Birth (L47) is Known. If Age of
> an Arrestee (at Time of Arrest) is reported as Unknown (\"00\") and
> Date of Birth of Arrestee (L47) is also reported, this incident will
> be rejected. If Date of Birth is Known, Age CANNOT be unknown. Error
> 22105**

### Sex of Arrestee (48)

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be present \-- CANNOT be Blank (G). **Errors** **16001**
>
> 2\) MUST be a valid code. Although Unknown (\"U\") is a valid code for
> Victim and Offender sex, it is NOT valid for Arrestees. **Error**s
> **16067**

**Allowed Entries:** Enter only [one]{.underline} code per Arrest
Segment:

  Age of Arrestee   
  ----------------- --------
  M                 Male
  F                 Female

Race of Arrestee (49)
---------------------

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be present \-- CANNOT be Blank (G). **Error**s **16001\
> **
>
> 2\) MUST be a valid code. **Error**s **16004**

**Allowed Entries:** Enter only [one]{.underline} code per Arrest
Segment (60):

  Race of Arrestee   
  ------------------ ----------------------------------
  W                  White
  B                  Black
  I                  American Indian / Alaskan Native
  A                  Asian / Pacific Islander
  U                  Unknown

### Ethnicity of Arrestee (50)

**Data Characteristics:** 1 Character Alpha

**Requirements:** If entered, MUST be a valid code. **Error**s **16004**

**Allowed Entries:** Enter only [one]{.underline} code **per Arrest Segment:**

  Ethnicity of Arrestee   
  ----------------------- ----------------------------
  H                       **Hispanic Origin**
  N                       **Not of Hispanic Origin**
  U                       **Unknown**

Resident Status of Arrestee (51)
--------------------------------

**Data Characteristics:** 1 Character Alpha

**Requirements:** If entered, MUST be a valid code. **Error 16004**

**Allowed Entries:** Enter only [one]{.underline} code per Arrest
Segment (60):

  Resident Status of Arrestee   
  ----------------------------- -------------
  R                             Resident
  N                             Nonresident
  U                             Unknown

### Disposition of Arrestee Under 17 (52)

**Data Characteristics:** 1 Character Alpha

**Requirements:**

> 1\) MUST be a valid code. **Error** **16004\
> **
>"desc_de52": "If entered, MUST be a valid code."
> "desc_de52": "MUST be entered if Arrestee Age is Under 17." **Error** **16052**
>
> "desc_de52": "CANNOT be entered if Arrestee Age is 17 or Over." **Error** **16053\
> **
>
> "desc_de52": "Disposition of Arrestee Under 17 (52) MUST be entered, when Age
> of Arrestee (47) indicated an Age for a Juvenile. Note that when Age
> is for a juvenile, the Disposition of Arrestee Under 17 (52) MUST be
> entered. Error 16040**

**Allowed Entries:** Enter only [one]{.underline} code per Arrest
Segment (60) \-- for Juveniles only:

  Disposition of Arrestee Under 17   
  ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------
  D                                  Handled Within the Department and Released (e.g., released to parents, released with warning, etc.) (reported to NIBRS as a "H")
  J                                  Referred to Juvenile Court or Probation Department (reported to NIBRS as a "R")
  W                                  Referred to Welfare Agency (reported to NIBRS as a "R")
  P                                  Referred to Other Police Agency (reported to NIBRS as a "R")
  A                                  Referred to Criminal or Adult Court (reported to NIBRS as a "R")

**Example:**

\(1) The Arrestee, age 13, was apprehended for vandalizing a school, then
released to his parents with a warning. The entry should be Handled
Within the Department and Released (\"D\").

\(2) The Arrestee, age 16, was arrested for rape, and turned over to the
Adult Court to be tried as an adult. The entry would be Referred to
Criminal or Adult Court (\"A\").

Location of Incident (Geographical Coordinates) (L53)

**Data Characteristics:** 12 Character **Alpha/Numeric**

**Format:** DDMMSSDDMMSS

> [First]{.underline} six characters are LONGITUDE in:

  DD   Degrees
  ---- ---------
  MM   Minutes
  SS   Seconds

> [Second]{.underline} six characters are LATITUDE in:

  DD   Degrees
  ---- ---------
  MM   Minutes
  SS   Seconds

**Requirements:** If entered, the field MUST contain 12 numeric places.
NO spaces allowed.\
**Error** **20200**

**Allowed Entries: Not required for LIBRS Releases 1.0/1.1. or 2.0,
unless agency uses geographical coordinates to track incidents. Entry
should either be valid geographical coordinates, or Blank (G). If
agencies submit zeroes, program will produce errors because zeroes are
numeric.**

### Station/Division/Precinct Identifier (L54)

**Data Characteristics:** 6 Character Alpha

**Requirements:** None

**Notes:** This field is optional and is for the reporting agency\'s use
in locating incidents.

Arrest Transaction Number (ATN) for Louisiana (L55)
-------------------------------

**Data Characteristics: 15 Character Alpha/Numeric**

**Requirements: MUST be present if fingerprints are submitted to the
Bureau of Identification of the Louisiana State Police.**

### Inchoate (70)

**Data Characteristics:** 1 Character Alpha

**Allowed Entries for Inchoates:**

Only one of the following Inchoate Modifiers can be used per LRS
offense:

  LRS Inchoate Modifiers   
  ------------------------ -----------------------------
  A                        Accessory After the Fact
  C                        Conspiracy
  I                        Inciting a Felony
  S                        Solicitation
  H                        Hate Crime Penalty Enhancer

**Requirements:**

1)  Must be Valid code. **Error** **90032**

2)  GROUP B Offense cannot have an inchoate. **Error** **90033**

3)  When Solicitation for Murder (14:28.1) is reported, it should be
    submitted without a Qualifier. This offense will be reported to the
    FBI as All Other Offense (NIBRS 90Z).

4)  When Principal (14:24) is used as an LRS charge, since this is a
    definitional LRS and does not carry any penalties, it is not
    necessary to submit this LRS to LIBRS.

5)  An LRS code appended with \"A\", \"C\", \"I\", \"S\", or \"H\"
    indicates the offense is an Inchoate of the LRS Offense shown in
    first ten digits Louisiana Revised Statute (6) or Louisiana Revised
    Statute of Arrest (45). These Modifiers for an LRS code should
    always be considered \"Completed\", even if the principal LRS
    offense was not. The offender completed the conspiracy, even if the
    offense itself was not completed by the offender conspired with.
    **Error 22085**

6)  When an LRS Code is submitted with the Inchoate \"-H\" appended, the
    LRS will be reported to the FBI to NIBRS under the offense code
    defined on the LIBRS/LRS Master Code Table.
