PROGRAM GetEnvironment(INPUT, OUTPUT);
USES Dos;

BEGIN {GetEnvironment}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN(GetEnv('REQUEST_METHOD'), GetEnv('QUERY_STRING'), GetEnv('CONTENT_LENGTH'), GetEnv('HTTP_USER_AGENT'), GetEnv('HTTP_HOST'))
END. {GetEnvironment}

