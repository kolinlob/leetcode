public class Codec {
    final String ABC = "23456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    final int limit = 7;

    Map<String, String> map = new HashMap();

    public String encode(String longUrl) {
        StringBuilder sb = new StringBuilder();

        byte[] bytes = longUrl.getBytes();

        for (int i = 0; i < bytes.length; i++)
            sb.append(ABC.charAt(bytes[i] % ABC.length()));

        String key = sb.reverse().subSequence(0, limit).toString();

        map.put(key, longUrl);

        return key;
    }

    public String decode(String shortUrl) {
        return map.getOrDefault(shortUrl, null);
    }
}