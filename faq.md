---
title: LIBRS Frequently Asked Questions
layout: default
permalink: /faq
---

# LIBRS FAQ

This page contains the questions and responses we've gotten from vendors and users over the years about LIBRS. This is an ever-growing list, so if you don't see an answer you need feel free to reach out. 

<br>

## Questions from Vendors

### Offenses (Segment 20)

For Segment 20 (Offense), there is a Victim Sequence Number. Does that mean there can be multiple Segment 20's per incident and that each victim (Segment 50) needs to have a Segment 20 associated with them?

* Yes, because each Offender (Segment 40) can be implicated in multiple Offenses and can be related to multiple Victims, each Offense (Segment 20) must be tied to one (1) Victim Sequence Number. This means if you have three (3) Victims of the same offense in your RMS, you will require three Offense Segments. (Segment 20)

____

### Properties (Segments 30, 31, 32, and 33)

* Since there is not a limit to how many Segment 31's that can be entered, can there be duplicate property description types allowed for same incident? Example, if in the same incident three (3) TV's were damaged, Would there be 3 Segment 31's with same Property Description Type and Property Loss Type?
  * Yes, since they are three distinct properties you will need to include three distinct Segment 31's (Property Description). You can handle that in your RMS however you want, so long as LIBRS gets sent the three segments (EG: If your RMS wants to store the property once and list it three times in the Incident, so long as we get those three segments to say that there are three TV's then it doesn't matter to us if you use the same property in the RMS or make three different ones.)

____

### Offenders (Segments 40 and 41)

* Can there be up to four (4) Segment 41's for each Segment 40?
  * Correct, you can include as many Segment 41's (up to four) as are relevant with each offense. 
    * One thing to note is that 'G - Gaming Activity Motivate for Crime' is not a NIBRS Reportable code. 
      * If more than one Motivation Type is supplied and one of them is 'G', then it will simply be left off the NIBRS Submission Data. 
      * If 'G' is the only Motivation Type supplied, then it will be converted to 'N - Not Applicable' when the data is sent to the FBI. 

____

### Victims (Segments 50, 51, and 52)

* If there are multiple injuries, does that mean there will be multiple Segment 51's for each Segment 50?

  * Yes, you can include up to five (5) Segment 51's (Victim Injury) as needed. However, the selected Injury types will need to be valid for the NIBRS Offense Code. 
    * For example, the two of the valid Injury Types for NIBRS 13A are 'O - Other Major Injury', and 'U - Unconsciousness', while 'M - Apparent Minor Injury' is not. 
      * If you were to send us two Segment 51's for the same Victim Sequence number where the Injury Types are 'O' and 'U', we **would not reject the incident**. 
      * However, if one of those Segment 51's were to have an Injury Type of 'M', instead, then we would reject it because that's not a valid Injury Type for the NIBRS 13A, even though the other Injury Type is valid.  

  

* If there are multiple Victim/Offender Relationships, will there be multiple Segment 52's for each Segment 50?

  * Yes, You'll need to add a Segment 52 for each Victim/Offender Relationship. 

    * For example, if there are two Victims, and three Offenders, you would have the following Segment 52's:

      ```
      52ILAXXXXXXX20-000000-01001001%%                    ZZ
      52ILAXXXXXXX20-000000-01001002%%                    ZZ
      52ILAXXXXXXX20-000000-01001003%%                    ZZ
      52ILAXXXXXXX20-000000-01002001%%                    ZZ
      52ILAXXXXXXX20-000000-01002002%%                    ZZ
      52ILAXXXXXXX20-000000-01002003%%                    ZZ
      ```

      Where LAXXXXXXXX is the Agency's ORI Number, and %% is the Victim/Offender Relationship Type. The first three Segments relate Victim 001 to each of the Offenders, and the last three Segments related Victim 002 to each of the Offenders. 

____

### How to Solve Errors on Flat Files

Sometimes the errors LIBRS gives can be difficult to interpret. We're actively working on improving this so that Errors are easier to understand and correct. In general, though, here's how to fix Errors on your Error Summary:

1. Read the Error Message, and take a look at the Error Contents. Sometimes it's pretty clear off the bat what the problem is. 
   * EG: If the Error is 13019 - DATA CAN ONLY BE ENTERED FOR CERTAIN OFFENSES, then that means the Data Element that's supplied in the Error Content shouldn't have been included based on the Offense Type that's been submitted for that offense. Either change the Offense Type to something else that does allow it, or remove that information from the Flat File. 
2. Go to the LIBRS Technical Specifications and Data Element Definitions, and use Ctrl + F (or Cmd + F) to find your Error Number. For the most part, the documentation contains some further descriptions about the cases that may have caused the error to get triggered. 
   * EG: Often times distinct NIBRS Codes will be listed with specific instructions on how to avoid the error your getting for those codes. 
3. Run your Flat File through https://validator.librs.org, if you haven't already, and check if the result is different. If you're trying to resolve errors to a file the LIBRS generated and uploaded to the FTP Server, it's possible that you're looking at errors that were being tripping unintentionally and have since been resolved. Running your file through Validator will give you an instant Error Summary for the file based on the latest LIBRS version available. 
4. If you're still stuck, ask for help! Contact the Louisiana Commission on Law Enforcement (https://lcle.la.gov) for assistance in understanding the errors your getting and how to correct them. 

### What's Wrong with my Flat File?

This section includes Flat Files that Vendors who are testing have sent to us for critique as to why the files aren't processing properly. 

Here's a couple of tips on things to check before you reach out for help:

1. Does the Flat File have a Header and Footer Segment?
   * These are required Segments no matter if you're submitting 0 Incidents or 1000. 
2. Are there blank lines between each of your segments?
   * There shouldn't be. Take a look at the examples below. 
3. Does the Flat File have padding to make each line 150 characters long?
   * Open it up in a Text Editor (Sublime Text, for instance) and verify that all the lines are the same length and the last selectable character is character number 151. Since the line starts on character 1 rather than character 0, being on character 151 means that you have 150 characters to the left of your cursor. 
4. Are all dates in the format of MMDDYYYY or MMYYYY?
   * LIBRS has to interpret Dates in this assumed format. Be sure you're not doing YYYYMMDD or DDMMYYYY. 
5. Does the Footer Segment have leading or trailing spaces rather than zeros?
   * EG: "99    19ZZ" and "9919    ZZ" are both improperly formatted. The Footer Segment should be in the form "99000019ZZ", where 19 is the number of lines in the file. Replace as many leading zeros as required to ensure the whole line, including the 99 and ZZ is 10 characters long.
6. If you're having problems with Properties, are you including Segment 33?
   * We try our best to infer what property goes with which offenses, but sometimes we have to make assumptions that turn out to be incorrect. This can be 100% avoided by sending us a Segment 33 for each Property/Offense Relationship in the incident. 



Note: To save space on the page we've removed the padding after the Segment Trailer "ZZ", and in order to not call anyone out we've removed the Header, too. In both of these cases, not having those present will throw an error, so we won't put any examples of files that have those issues. 

### Flat File Example Errors

#### Example 1: 

This file was kicking back the following errors:

* 13042 - Property Description had a Value that Exceeded Threshold of [$ Value].
* 10081 - This Property Code cannot exist with this offense.
* 90018 - Property must have a valid relationship to at least one offense.

```
10ILA05200T12019005456                    06012019 20N                            ZZ
20ILA05200T12019005456  00114:67       C00107               23H                 ZZ
20ILA05200T12019005456  00214:67       C00207               23H                 ZZ
20ILA05200T12019005456  00314:67       C00307               23H                 ZZ
30ILA05200T12019005456                          ZZ
31ILA05200T12019005456  777100                               001                 ZZ
31ILA05200T12019005456  777100                               002                 ZZ
31ILA05200T12019005456  777100                               003                 ZZ
33ILA05200T12019005456  001001                    ZZ
33ILA05200T12019005456  001002                    ZZ
33ILA05200T12019005456  001003                    ZZ
50ILA05200T12019005456  001B                                        ZZ
50ILA05200T12019005456  002I26 01161993FWNU                         ZZ
50ILA05200T12019005456  003I45 06121974FWNU                         ZZ
40ILA05200T12019005456  000             88                    ZZ
41ILA05200T12019005456  000N                    ZZ
9919    ZZ
```

The first thing to notice is that the Footer Segment is not correct. The footer should always be 10 characters long with leading zeros before the number of lines in the file. Currently the Footer Segment looks like this:

```
9919    ZZ
```

However, it should look like this:

```
99000019ZZ
```



Next, we're getting a 90018 that states that we should have at least one offense linked to this property. Looking at the file, we do have three Segment 20's, 31's and 33's, so it's to be inferred that each Property is to belong to one offense. The first thing to look at is the Segment 33's, since that's the Segment that will link the properties to the offenses:

```
33ILA05200T12019005456  001001                    ZZ
33ILA05200T12019005456  001002                    ZZ
33ILA05200T12019005456  001003                    ZZ	
```

Right off the bat, we can see the problem. Each of the DE P1R's (Property Sequence Number Reference) is listed as 001, while the DE L6R's (Offense Sequence Number Reference) point to each of the three offenses. This means that Property Sequence Number 1 has inadvertently been applied to all of the Offenses, while the other two properties (002 and 003) have been orphaned. We can fix that by changing the Segment 33's to the following (the *'s are just there to get your attention to what changed, they aren't actually included in the file):

```
33ILA05200T12019005456  **001001**                    ZZ
33ILA05200T12019005456  **002002**                    ZZ
33ILA05200T12019005456  **003003**                    ZZ
```

Running the File again, we've removed the 10081 and 90018 Errors. The 10081 Error went away because we fixed the 90018, and now we're applying a single stolen property to each offense. 



Next we need to resolve the 13042 Error. This error has to do with the value of the Properties. So, we need to take a look at the Segment 31's:

```
31ILA05200T12019005456  777100                               001                 ZZ
31ILA05200T12019005456  777100                               002                 ZZ
31ILA05200T12019005456  777100                               003                 ZZ
```

Again, this one is pretty clear as to what the problem is. after the "777" is where the value of the property begins. The value field is 9 characters long, and lead with zeros. Here it looks like it was intended to submit a property value of 100. However, since there are no leading zeros, LIBRS is interpreting the trailing spaces to be zeros, meaning that it's actually seeing a value of 100,000,000. LIBRS doesn't accept values of over 1 million. We added two extra digits to that in the event that someone is trying to enter cents onto the value of the property (cents should be rounded off)

So, correcting that gets us the following (Again, the *'s are there to show the difference and shouldn't be included in the Flat File):

```
31ILA05200T12019005456  777**000000100**                         001                 ZZ
31ILA05200T12019005456  777**000000100**                         002                 ZZ
31ILA05200T12019005456  777**000000100**                         003                 ZZ
```



Putting it back together, we now have the following file that validates without Error:

```
10ILA05200T12019005456                    06012019 20N                            ZZ
20ILA05200T12019005456  00114:67       C00107               23H                 ZZ
20ILA05200T12019005456  00214:67       C00207               23H                 ZZ
20ILA05200T12019005456  00314:67       C00307               23H                 ZZ
30ILA05200T12019005456                          ZZ
31ILA05200T12019005456  777000000100                         001                 ZZ
31ILA05200T12019005456  777000000100                         002                 ZZ
31ILA05200T12019005456  777000000100                         003                 ZZ
33ILA05200T12019005456  001001                    ZZ
33ILA05200T12019005456  002002                    ZZ
33ILA05200T12019005456  003003                    ZZ
50ILA05200T12019005456  001B                                        ZZ
50ILA05200T12019005456  002I26 01161993FWNU                         ZZ
50ILA05200T12019005456  003I45 06121974FWNU                         ZZ
40ILA05200T12019005456  000             88                    ZZ
41ILA05200T12019005456  000N                    ZZ
99000019ZZ
```

