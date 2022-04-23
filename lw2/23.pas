PROGRAM PrintHelloName(INPUT, OUTPUT);
USES
  DOS;
VAR
  Query, Value: STRING;
  LenValue: INTEGER;
BEGIN {PrintHelloName}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  Query := GetEnv('QUERY_STRING');
  IF Length(Query) > 0
  THEN
    BEGIN
      Value := Copy(Query, 1, 5);
      IF Value = 'name='
      THEN 
        BEGIN
          LenValue := Length(Query) - POS('=', Query); 
          Value := Copy(Query, 6, LenValue);
          IF Length(Name) > 0
          THEN
            WRITELN('Hello Dear, ', Value, '!')
          ELSE
            WRITELN('Hello Anonymous!')  
        END
      ELSE
        WRITELN('Hello Anonymous!')
    END
  ELSE
    WRITELN('Hello Anonymous!')
END. {PrintHelloName}

