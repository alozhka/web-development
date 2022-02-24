PROGRAM PrintHelloName(INPUT, OUTPUT);
USES Dos;

BEGIN {PrintHelloName}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  IF (GetEnv('QUERY_STRING') = '') OR (GetEnv('QUERY_STRING') = 'name=')
  THEN
    WRITELN('Hello Annonymous!')
  ELSE
    WRITELN('Hello ', GetEnv('QUERY_STRING'))
END. {PrintHelloName}

