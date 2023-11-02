
public class App {
    
    private String name;
    private double rating;
    private String type;
    private double price;
    private String platform;
    private String sysRequire;
    
    public App (String inName, double inRating, String inType, double inPrice, String inPlatform, String inSysRequire) {
        name = inName;
        rating = inRating;
        type = inType;
        price = inPrice;
        platform = inPlatform;
        sysRequire = inSysRequire;
    }
    
    public App() {
        
    }
    
    public String getName() {
        return name;
    }
    
    public double getRating() {
        return rating;
    }
    
    public String getType() {
        return type;
    }
    
    public double getPrice() {
        return price;
    }
    
    public String getPlatform() {
        return platform;
    }
    
    public String getSysRequire() {
        return sysRequire;
    }
    
    public void setName(String inName) {
        name = inName;
    }
    
    public void setRating(double inRating) {
        rating = inRating;
    }
    
    public void setType(String inType) {
        type = inType;
    }
    
    public void setPrice(double inPrice) {
        price = inPrice;
    }
    
    public void setPlatform(String inPlatform) {
        platform = inPlatform;
    }
    
    public void setSysRequire(String inSysRequire) {
        sysRequire = inSysRequire;
    }
     
}


