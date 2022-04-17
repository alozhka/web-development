PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;

FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  Value, Query: STRING;
  PosValue: INTEGER;
BEGIN
  Query := GetEnv('QUERY_STRING');
  Value := '';
  Key := Concat(Key, '=');
  I := POS(Key, Query);
  IF I > 0
  THEN
    BEGIN
      WHILE I < Length(Query) + 1) AND (Query[I] <> '&')
      DO
        BEGIN
          Value := Value + Query[I];
          I := I + 1
        END
    END;
  GetQueryStringParameter := Value
END;

BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}

